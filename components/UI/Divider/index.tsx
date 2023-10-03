import React from "react";

export interface DividerProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
  contentPlacement?: "left" | "center" | "right";
}

const Divider: React.ForwardRefRenderFunction<HTMLDivElement, DividerProps> = (
  { rootClassName = "", style, contentPlacement = "right", children },
  ref
) => {
  const contentPlacementClassName = `divider-content-${contentPlacement}`;

  return (
    <div ref={ref} style={style} className={`divider ${rootClassName}`}>
      {children && <div className={`divider-content ${contentPlacementClassName}`}>{children}</div>}
    </div>
  );
};

export default React.forwardRef(Divider);
