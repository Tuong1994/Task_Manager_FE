import React from "react";

export interface CardProps {
  rootClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  header?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
  hoverable?: boolean;
}

const Card: React.ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
  {
    rootClassName = "",
    headerClassName = "",
    bodyClassName = "",
    style,
    headerStyle,
    bodyStyle,
    header,
    children,
    hoverable,
  },
  ref
) => {
  const hoverClassName = () => (hoverable ? "card-hoverable" : "");

  return (
    <div ref={ref} style={style} className={`card ${hoverClassName()} ${rootClassName}`}>
      <div style={headerStyle} className={`card-header ${headerClassName}`}>
        {header}
      </div>
      <div style={bodyStyle} className={`card-body ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default React.forwardRef(Card);
