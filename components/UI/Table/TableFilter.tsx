"use client";

import React from "react";
import { GridCol, GridRow } from "../Grid";
import Select from "@/components/Control/Select";
import Button from "../Button";
import useLangs from "@/hooks/useLangs";
import useOption from "@/hooks/useOption";

interface TableFilterProps {
  filter?: React.ReactNode | React.ReactNode[];
}

const TableFilter: React.FC<TableFilterProps> = ({ filter }) => {
  const { langs } = useLangs();

  const options = useOption();

  return (
    <div className="wrap-actions">
      <GridRow align="middle">
        <GridCol xs={24}>{filter}</GridCol>

        <GridCol xs={24} md={8} lg={8} span={6}>
          <GridRow>
            <GridCol xs={18} md={20} lg={20} span={20}>
              <Select options={options.filter} />
            </GridCol>
            <GridCol xs={4} md={4} lg={4} span={4}>
              <Button variant="danger" ghost>
                {langs?.common.actions.cancel}
              </Button>
            </GridCol>
          </GridRow>
        </GridCol>
      </GridRow>
    </div>
  );
};

export default TableFilter;
