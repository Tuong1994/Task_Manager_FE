import React from "react";
import useTheme from "@/hooks/useTheme";

export interface TitleProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode | React.ReactNode[];
}

const Title: React.ForwardRefRenderFunction<HTMLHeadingElement, TitleProps> = (
  { rootClassName = "", style, level = 1, children },
  ref
) => {
  const themeClassName = useTheme("title");

  const commonProps = { ref, style, className: `title title-${level} ${themeClassName} ${rootClassName}` };

  return (
    <React.Fragment>
      {level === 1 && <h1 {...commonProps}>{children}</h1>}
      {level === 2 && <h2 {...commonProps}>{children}</h2>}
      {level === 3 && <h3 {...commonProps}>{children}</h3>}
      {level === 4 && <h4 {...commonProps}>{children}</h4>}
      {level === 5 && <h5 {...commonProps}>{children}</h5>}
      {level === 6 && <h6 {...commonProps}>{children}</h6>}
    </React.Fragment>
  );
};

export default React.forwardRef(Title);
