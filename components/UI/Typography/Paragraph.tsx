import useTheme from "@/hooks/useTheme";
import React from "react";

export interface ParagraphProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode;
  align?: "left" | "center" | "right" | "justify";
}

const Paragraph: React.ForwardRefRenderFunction<HTMLParagraphElement, ParagraphProps> = (
  { rootClassName = "", style, align = "left", children },
  ref
) => {
  const themeClassName = useTheme("paragraph");

  const alignClassName = `paragraph-${align}`;

  return (
    <p ref={ref} style={style} className={`paragraph ${themeClassName} ${alignClassName} ${rootClassName}`}>
      {children}
    </p>
  );
};

export default React.forwardRef(Paragraph);
