"use client";

import React from "react";
import useRender from "@/hooks/useRender";

export interface TooltipProps {
  rootClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
  content?: React.ReactNode | React.ReactNode[];
  placement?: "top" | "left" | "right" | "bottom";
}

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (
  {
    rootClassName = "",
    titleClassName = "",
    contentClassName = "",
    children,
    placement = "bottom",
    content,
    style,
    titleStyle,
    contentStyle,
  },
  ref
) => {
  const [show, setShow] = React.useState<boolean>(false);

  const render = useRender(show);

  const placementClassName = `tooltip-${placement}`;

  const arrowClassName = content ? `tooltip-title-arrow` : "";

  const showArrowClassName = show ? "tooltip-title-arrow-active" : "";

  const showContentClassName = show ? "tooltip-content-active" : "";

  const handleHover = () => setShow(!show);

  return (
    <div ref={ref} style={style} className={`tooltip ${placementClassName} ${rootClassName}`}>
      <div
        style={titleStyle}
        className={`tooltip-title ${showArrowClassName} ${arrowClassName} ${titleClassName}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {children}
      </div>

      {content && render && (
        <div style={contentStyle} className={`tooltip-content ${showContentClassName} ${contentClassName}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default React.forwardRef(Tooltip);
