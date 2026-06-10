type BrandMarkProps = {
  size?: "sm" | "lg";
};

export function BrandMark({ size = "sm" }: BrandMarkProps) {
  const isLarge = size === "lg";

  return (
    <img
      src="/brand/k-icon-dark-bg.png"
      srcSet="/brand/k-icon-dark-bg.png 1x, /brand/k-icon-dark-2x.png 2x"
      alt="Kyroscoe K mark"
      className={`shrink-0 object-contain ${isLarge ? "h-44 w-56 sm:h-56 sm:w-72" : "h-10 w-12"}`}
    />
  );
}
