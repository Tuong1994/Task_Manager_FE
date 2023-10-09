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

  const itemStyle = (idx: number) => {
    const childs = React.Children.count(children);

    if (idx === childs - 1) return;

    if (typeof size === "number") return { marginRight: `${size}px` };

    if (size === "sm") return { marginRight: "10px" };

    if (size === "md") return { marginRight: "40px" };

    if (size === "lg") return { marginRight: "60px" };
  };

  return (
    <div ref={ref} style={style} className={`space ${justifyClassName} ${alignClassName} ${rootClassName}`}>
      {React.Children.map(children, (child, idx) => (
        <div style={itemStyle(idx)}>{child}</div>
      ))}
    </div>
  );
};

export default React.forwardRef(Space);
