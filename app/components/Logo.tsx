type LogoProps = {
  className?: string;
};

/**
 * UPRA Marketing logotype — original PNG as supplied by the brand owner.
 * File at /public/upra-logo.png
 */
export function Logo({ className = "h-8 w-auto" }: LogoProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/upra-logo.png"
      alt="UPRA"
      className={className}
      decoding="async"
    />
  );
}
