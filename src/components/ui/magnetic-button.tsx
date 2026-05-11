import type { ReactNode } from "react";

export default function MagneticButton({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}) {
  return (
    <a href={href ?? "#"} className={className}>
      {children}
    </a>
  );
}
