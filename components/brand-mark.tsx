import { useId } from "react";

type BrandSymbolProps = {
  className?: string;
  variant?: "outline" | "filled";
};

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandSymbol({
  className,
  variant = "outline",
}: BrandSymbolProps) {
  const filled = variant === "filled";
  const clipId = `${useId().replace(/:/g, "")}-${variant}`;

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="34" />
        </clipPath>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="34"
        fill={filled ? "#f7efe6" : "transparent"}
        stroke={filled ? "none" : "#ff5c00"}
        strokeWidth="6"
      />
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M13 70C28 63 36 51 48 41C60 31 72 26 87 22"
          stroke="#ff5c00"
          strokeWidth="7"
        />
        <path
          d="M20 82C34 75 43 63 55 53C66 44 78 39 91 35"
          stroke="#ff5c00"
          strokeWidth="7"
        />
      </g>
      {!filled && (
        <circle
          cx="50"
          cy="50"
          r="34"
          stroke="#ff5c00"
          strokeWidth="6"
        />
      )}
    </svg>
  );
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className={`brand-mark${compact ? " brand-mark-compact" : ""}`}>
      <BrandSymbol className="brand-symbol-svg" />
      <span className="brand-name">Trilho</span>
    </span>
  );
}
