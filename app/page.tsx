"use client";

import React from "react";
import { NextPage } from "next";
import { UI } from "@/components";
import Statistics from "@/features/dashboard/Statistics";
import Chart from "@/features/dashboard/Chart";
import PriorityTask from "@/features/dashboard/PriorityTask";
import useLangs from "@/hooks/useLangs";

const { ContentHeader, Grid } = UI;

const { GridRow, GridCol } = Grid;

const Home: NextPage = () => {
  const { langs } = useLangs();

  return (
    <React.Fragment>
      <ContentHeader title={langs?.dashboard.title} />

      <Statistics langs={langs} />

      <GridRow gutters={[20]} justify="between">
        <GridCol xs={24} md={24} lg={24} span={16}>
          <Chart langs={langs} />
        </GridCol>

        <GridCol xs={24} md={24} lg={24} span={8}>
          <PriorityTask langs={langs} />
        </GridCol>
      </GridRow>
    </React.Fragment>
  );
};

export default Home;
