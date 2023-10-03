"use client"

import React from "react";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rootClassName?: string;
  sizes?: "sm" | "md" | "lg";
}

const Switch: React.ForwardRefRenderFunction<HTMLInputElement, SwitchProps> = (
  { rootClassName = "", sizes = "md", ...restProps },
  ref
) => {
  const sizeClassName = `switch-${sizes}`;

  return (
    <input ref={ref} {...restProps} type="checkbox" className={`switch ${sizeClassName} ${rootClassName}`} />
  );
};

export default React.forwardRef(Switch);
