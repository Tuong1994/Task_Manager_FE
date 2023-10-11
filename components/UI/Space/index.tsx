import React from "react";

export interface SpaceProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | number;
  justify?: "start" | "center" | "end";
  align?: "top" | "middle" | "bottom";
  children?: React.ReactNode | React.ReactNode[];
}

const Space: React.ForwardRefRenderFunction<HTMLDivElement, SpaceProps> = (
  { children, rootClassName = "", size = "sm", justify = "start", align = "middle", style },
  ref
) => {
  const justifyClassName = `space-${justify}`;

  const alignClassName = `space-${align}`;

  const inlineStyle = () => {
    const childs = React.Children.count(children);

    if (childs === 1) return;

    if (typeof size === "number") return { ...style, gap: `${size}px` };

    if (size === "sm") return { ...style, gap: "10px" };

    if (size === "md") return { ...style, gap: "40px" };

    if (size === "lg") return { ...style, gap: "60px" };
  };

  return (
    <div
      ref={ref}
      style={inlineStyle()}
      className={`space ${justifyClassName} ${alignClassName} ${rootClassName}`}
    >
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
};

export default React.forwardRef(Space);
