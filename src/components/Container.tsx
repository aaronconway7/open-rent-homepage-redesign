import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl mx-auto px-8 md:px-0 ${className}`}>
      {children}
    </div>
  );
}
