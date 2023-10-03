import React from "react";

export interface SpaceProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | number;
  children?: React.ReactNode | React.ReactNode[];
}

const Space: React.ForwardRefRenderFunction<HTMLDivElement, SpaceProps> = (
  { children, rootClassName = "", size = "sm", style },
  ref
) => {
  const itemStyle = (idx: number) => {
    const childs = React.Children.count(children);

    if (idx === childs - 1) return;

    if (typeof size === "number") return { marginRight: `${size}px` };

    if (size === "sm") return { marginRight: "10px" };

    if (size === "md") return { marginRight: "40px" };

    if (size === "lg") return { marginRight: "60px" };
  };

  return (
    <div ref={ref} style={style} className={`space ${rootClassName}`}>
      {React.Children.map(children, (child, idx) => (
        <div style={itemStyle(idx)}>{child}</div>
      ))}
    </div>
  );
};

export default React.forwardRef(Space);