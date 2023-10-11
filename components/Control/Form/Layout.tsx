"use client";

import React from "react";
import Form, { FormProps } from ".";
import { ContentHeader, Button, Space, Grid } from "@/components/UI";
import useLangs from "@/hooks/useLangs";

const { GridRow, GridCol } = Grid;

interface FormLayoutProps<M> extends FormProps<M> {
  isUpdate?: boolean;
  headTitle?: React.ReactNode | React.ReactNode[];
  leftItems?: React.ReactNode | React.ReactNode[];
  rightItems?: React.ReactNode | React.ReactNode[];
}

const FormLayout = <M extends object>({
  isUpdate,
  headTitle,
  leftItems,
  rightItems,
  ...restProps
}: FormLayoutProps<M>) => {
  const { langs } = useLangs();

  return (
    <Form<M> {...restProps}>
      <ContentHeader
        title={headTitle}
        actions={
          <Space justify="end">
            <Button type="submit" variant="primary">
              {!isUpdate ? langs?.common.actions.create : langs?.common.actions.update}
            </Button>
          </Space>
        }
      />

      <GridRow justify="between">
        {leftItems && (
          <GridCol xs={24} md={12} lg={14} span={14}>
            {leftItems}
          </GridCol>
        )}

        {rightItems && (
          <GridCol xs={24} md={12} lg={10} span={10}>
            {rightItems}
          </GridCol>
        )}
      </GridRow>
    </Form>
  );
};

export default FormLayout;
