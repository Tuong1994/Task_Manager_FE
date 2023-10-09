"use client";

import React from "react";
import { GridRow, GridCol } from "../Grid";
import { Title } from "../Typography";
import Space from "../Space";
import useLangs from "@/hooks/useLangs";

export interface ContentHeaderProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  total?: number;
  title?: React.ReactNode | React.ReactNode[];
  actions?: React.ReactNode | React.ReactNode[];
}

const ContentHeader: React.ForwardRefRenderFunction<HTMLDivElement, ContentHeaderProps> = (
  { rootClassName = "", style, total, title, actions },
  ref
) => {
  const { langs } = useLangs();

  return (
    <div ref={ref} style={style} className={`content-header ${rootClassName}`}>
      <GridRow rootClassName="header-inner" justify="between">
        <GridCol
          xs={actions ? 12 : 24}
          md={actions ? 12 : 24}
          lg={actions ? 12 : 24}
          span={actions ? 12 : 24}
        >
          <Title level={3}>{title}</Title>

          {total && (
            <Space rootClassName="inner-content">
              <span>{langs?.common.components.contentHeader.total}</span>
              <span>&#10088;{total}&#10089;</span>
            </Space>
          )}
        </GridCol>

        {actions && (
          <GridCol xs={12} md={12} lg={12} span={12}>
            <Space rootClassName="inner-actions" justify="end">
              {actions}
            </Space>
          </GridCol>
        )}
      </GridRow>
    </div>
  );
};

export default React.forwardRef(ContentHeader);
