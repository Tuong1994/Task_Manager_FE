import React from "react";
import Section from "@/components/UI/Section";
import Header from "./Header";
import Side from "./Side";

interface LayoutProps {
  rootClassName?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Layout: React.ForwardRefRenderFunction<HTMLDivElement, LayoutProps> = (
  { rootClassName = "", children },
  ref
) => {
  return (
    <main ref={ref} className={`layout ${rootClassName}`}>
      <Header />

      <div className="layout-content">
        <Side />
        <Section>{children}</Section>
      </div>
    </main>
  );
};

export default React.forwardRef(Layout);
