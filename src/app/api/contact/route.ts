import { site } from "@/lib/site";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_SUBMISSIONS = 5;
const MAX_BODY_BYTES = 12_000;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

type ContactSubmission = {
  name: string;
  email: string;
  business: string;
  project: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isValidEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getClientKey(request: Request) {
  return (
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function isRateLimited(clientKey: string, now: number) {
  for (const [key, entry] of rateLimit) {
    if (entry.resetAt <= now) rateLimit.delete(key);
  }

  const entry = rateLimit.get(clientKey);
  if (entry && entry.resetAt > now) {
    if (entry.count >= MAX_SUBMISSIONS) return true;
    entry.count += 1;
    return false;
  }

  if (rateLimit.size >= 500) {
    const oldestKey = rateLimit.keys().next().value;
    if (oldestKey) rateLimit.delete(oldestKey);
  }
  rateLimit.set(clientKey, { count: 1, resetAt: now + WINDOW_MS });
  return false;
}

function errorResponse(message: string, status: number) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return errorResponse("Submit the form using the supported format.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return errorResponse("The enquiry is too long. Shorten it and try again.", 413);
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return errorResponse("The enquiry could not be read. Please try again.", 400);
  }

  if (!isRecord(payload)) {
    return errorResponse("The enquiry could not be read. Please try again.", 400);
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const business = typeof payload.business === "string" ? payload.business.trim() : "";
  const project = typeof payload.project === "string" ? payload.project.trim() : "";

  if (!name || name.length > 100) {
    return errorResponse("Enter a name of 1 to 100 characters.", 400);
  }
  if (!isValidEmail(email)) {
    return errorResponse("Enter a valid email address.", 400);
  }
  if (business.length > 120) {
    return errorResponse("Keep the business name under 120 characters.", 400);
  }
  if (!project || project.length > 5000) {
    return errorResponse("Project details must be between 1 and 5,000 characters.", 400);
  }

  const clientKey = getClientKey(request);
  const now = Date.now();
  if (isRateLimited(clientKey, now)) {
    return Response.json(
      { message: "Too many enquiries. Please try again in a few minutes." },
      {
        status: 429,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": String(Math.ceil(WINDOW_MS / 1000)),
        },
      },
    );
  }

  const accessKey = process.env.WEB3FORMS_KEY?.trim();
  if (!accessKey) {
    return errorResponse(
      "The contact form is not configured yet. Please use email or WhatsApp instead.",
      503,
    );
  }

  const submission: ContactSubmission = { name, email, business, project };
  try {
    const providerResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: `${site.name} website`,
        subject: `Website enquiry from ${submission.name}`,
        name: submission.name,
        email: submission.email,
        business: submission.business || "Not provided",
        message: submission.project,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    let providerResult: unknown;
    try {
      providerResult = await providerResponse.json();
    } catch {
      return errorResponse("The enquiry could not be forwarded. Please try email or WhatsApp.", 502);
    }

    if (!providerResponse.ok || !isRecord(providerResult) || providerResult.success !== true) {
      return errorResponse("The enquiry could not be forwarded. Please try email or WhatsApp.", 502);
    }

    return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return errorResponse("The enquiry could not be forwarded. Please try email or WhatsApp.", 502);
  }
}
