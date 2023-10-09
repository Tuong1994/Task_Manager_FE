"use client";

import React from "react";
import Section from "@/components/UI/Section";
import Header from "./Header";
import Side from "./Side";
import useTheme from "@/hooks/useTheme";

interface LayoutProps {
  rootClassName?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Layout: React.ForwardRefRenderFunction<HTMLDivElement, LayoutProps> = (
  { rootClassName = "", children },
  ref
) => {
  const themeClassName = useTheme("layout");

  return (
    <main ref={ref} className={`layout ${themeClassName} ${rootClassName}`}>
      <Header />

      <div className="layout-content">
        <Side />

        <Section rootClassName="content-section">{children}</Section>
      </div>
    </main>
  );
};

export default React.forwardRef(Layout);
