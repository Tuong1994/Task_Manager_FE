import React from "react";
import useTheme from "@/hooks/useTheme";

interface BadgeProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
  color?: "emerald" | "blue" | "green" | "orange" | "red" | "yellow" | "violet" | "pink";
  ghost?: boolean;
}

const Badge: React.ForwardRefRenderFunction<HTMLDivElement, BadgeProps> = (
  { rootClassName = "", style, children, color, ghost },
  ref
) => {
  const themeClassName = useTheme("badge");

  const colorClassName = () => {
    if (!color) return "";

    if (ghost) return `badge-ghost badge-ghost-${color}`;

    return `badge-${color}`;
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`badge ${themeClassName} ${colorClassName()} ${rootClassName}`}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(Badge);
