"use client";

import React from "react";
import { FaSpinner } from "react-icons/fa";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rootClassName?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "success" | "warning" | "danger";
  loading?: boolean;
  ghost?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { rootClassName = "", size = "md", variant, loading, ghost, children, ...restProps },
  ref
) => {
  const variantClassName = () => {
    if (!variant) return "";

    if (ghost) return `button-ghost button-ghost-${variant}`;

    return `button-variant button-${variant}`;
  };

  const sizeClassName = () => `button-${size}`;

  return (
    <button
      ref={ref}
      className={`button ${sizeClassName()} ${variantClassName()} ${rootClassName}`}
      {...restProps}
    >
      {loading && <FaSpinner className="button-icon" />}
      <React.Fragment>{children}</React.Fragment>
    </button>
  );
};

export default React.forwardRef(Button);
