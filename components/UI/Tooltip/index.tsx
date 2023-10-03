import React from "react";

export interface TooltipProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
  content?: React.ReactNode | React.ReactNode[];
  placement?: "top" | "left" | "right" | "bottom";
}

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (
  { rootClassName = "", children, placement = "left", content, style },
  ref
) => {
  const placementClassName = `tooltip-${placement}`;

  return (
    <div ref={ref} style={style} className={`tooltip ${placementClassName} ${rootClassName}`}>
      <div className="tooltip-child">Tooltip</div>

      <div className="tooltip-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum error sapiente cum placeat a tempora
        reiciendis debitis optio commodi dignissimos.
      </div>
    </div>
  );
};

export default React.forwardRef(Tooltip);
