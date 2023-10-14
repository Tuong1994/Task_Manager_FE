"use client";

import React from "react";
import { FaSpinner } from "react-icons/fa";
import useTheme from "@/hooks/useTheme";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rootClassName?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "success" | "warning" | "danger";
  link?: boolean;
  loading?: boolean;
  ghost?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { rootClassName = "", size = "md", variant, loading, link, ghost, children, ...restProps },
  ref
) => {
  const themeClassName = useTheme("button");

  const variantClassName = () => {
    if (link) return "";

    if (!variant) return "";

    if (ghost) return `button-ghost button-ghost-${variant}`;

    return `button-variant button-${variant}`;
  };

  const sizeClassName = `button-${size}`;

  const linkClassName = link ? "button-link" : "";

  return (
    <button
      ref={ref}
      className={`button ${themeClassName} ${sizeClassName} ${variantClassName()} ${linkClassName} ${rootClassName}`}
      {...restProps}
    >
      {loading && <FaSpinner className="button-icon" />}
      <React.Fragment>{children}</React.Fragment>
    </button>
  );
};

export default React.forwardRef(Button);
