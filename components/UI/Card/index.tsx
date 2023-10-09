import React from "react";
import useTheme from "@/hooks/useTheme";

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
  bordered?: boolean;
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
    bordered = true,
  },
  ref
) => {
  const themeClassName = useTheme("card");

  const hoverClassName = hoverable ? "card-hoverable" : "";

  const borderClassName = bordered ? "card-border" : "";

  return (
    <div
      ref={ref}
      style={style}
      className={`card ${themeClassName} ${borderClassName} ${hoverClassName} ${rootClassName}`}
    >
      {header && (
        <div style={headerStyle} className={`card-header ${headerClassName}`}>
          {header}
        </div>
      )}

      <div style={bodyStyle} className={`card-body ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default React.forwardRef(Card);
