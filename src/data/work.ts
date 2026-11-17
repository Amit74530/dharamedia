export type WorkCaseStudy = {
  title: string;
  clientType: string;
  problem: string;
  whatWeDid: string[];
  result: string;
  image: string;
  quote?: {
    text: string;
    attribution: string;
  };
};

// TODO: add only approved case studies with verified outcomes and image permissions.
// Example template (keep unpublished until the details are approved):
// const example: WorkCaseStudy = {
//   title: "[Approved project title]",
//   clientType: "[Hotel, resort, or homestay]",
//   problem: "[Verified starting challenge]",
//   whatWeDid: ["[Approved service]", "[Approved deliverable]"],
//   result: "[Verified result, with evidence]",
//   image: "/media/[approved-project-image].webp",
//   quote: { text: "[Approved client quote]", attribution: "[Approved attribution]" },
// };
export const work: WorkCaseStudy[] = [];
