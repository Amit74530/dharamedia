import Image from "next/image";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Image
      alt="Dhara Media, connecting brands with people"
      className={className}
      height={120}
      priority
      src="/dhara-media-logo.png"
      width={180}
    />
  );
}
