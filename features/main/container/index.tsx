"use client";

import React from "react";
import Section from "@/components/UI/Section";
import Header from "@/components/UI/Header";
import Side from "./Side";
import useTheme from "@/hooks/useTheme";

interface ContainerProps {
  rootClassName?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Container: React.ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (
  { rootClassName = "", children },
  ref
) => {
  const themeClassName = useTheme("container");

  return (
    <main ref={ref} className={`container ${themeClassName} ${rootClassName}`}>
      <Header />

      <div className="container-content">
        <Side />

        <Section rootClassName="content-section">{children}</Section>
      </div>
    </main>
  );
};

export default React.forwardRef(Container);
