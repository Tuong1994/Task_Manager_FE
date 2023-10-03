import React from "react";

interface BadgeProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
  variant?: "primary" | "success" | "warning" | "danger";
  ghost?: boolean;
}

const Badge: React.ForwardRefRenderFunction<HTMLDivElement, BadgeProps> = (
  { rootClassName = "", style, children, variant, ghost },
  ref
) => {
  const variantClassName = () => {
    if (!variant) return "";

    if (ghost) return `badge-ghost badge-ghost-${variant}`;

    return `badge-${variant}`;
  };

  return (
    <div ref={ref} style={style} className={`badge ${variantClassName()} ${rootClassName}`}>
      {children}
    </div>
  );
};

export default React.forwardRef(Badge);
