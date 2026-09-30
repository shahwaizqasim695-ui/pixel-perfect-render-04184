import coverAsset from "@/assets/book-cover-full.jpg.asset.json";

/**
 * The uploaded artwork is the full wraparound (back | spine | front).
 * `variant="front"` crops to the front panel; `variant="full"` shows the wrap.
 */
export function BookCover({
  variant = "front",
  className = "",
  priority = false,
}: {
  variant?: "front" | "full";
  className?: string;
  priority?: boolean;
}) {
  if (variant === "full") {
    return (
      <img
        src={coverAsset.url}
        alt="Full wraparound cover of Chasing The Carrot On The Stick by Q.L. Levy"
        loading={priority ? "eager" : "lazy"}
        className={`w-full rounded-sm shadow-[var(--shadow-book)] ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative aspect-[0.66] overflow-hidden rounded-sm shadow-[var(--shadow-book)] ring-1 ring-border ${className}`}
    >
      <img
        src={coverAsset.url}
        alt="Front cover of Chasing The Carrot On The Stick by Q.L. Levy"
        loading={priority ? "eager" : "lazy"}
        className="absolute right-0 top-0 h-full w-auto max-w-none"
      />
    </div>
  );
}
