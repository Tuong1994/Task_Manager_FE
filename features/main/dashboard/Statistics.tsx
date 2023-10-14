import React from "react";
import { UI } from "@/components";
import { Langs } from "@/common/type/lang";

const { Grid, Card, Typography } = UI;

const { GridRow, GridCol } = Grid;

const { Title, Paragraph } = Typography;

interface StatisticsProps {
  langs: Langs;
}

const Statistics: React.FC<StatisticsProps> = ({ langs }) => {
  return (
    <GridRow justify="between" rootClassName="dashboard-statistic">
      <GridCol xs={24} md={12} lg={12} span={6}>
        <Card hoverable rootClassName="statistic-card statistic-task">
          <Title level={6}>{langs?.dashboard.task}</Title>
          <Paragraph rootClassName="card-content">100</Paragraph>
        </Card>
      </GridCol>

      <GridCol xs={24} md={12} lg={12} span={6}>
        <Card hoverable rootClassName="statistic-card statistic-finished">
          <Title level={6}>{langs?.dashboard.finished}</Title>
          <Paragraph rootClassName="card-content">100</Paragraph>
        </Card>
      </GridCol>

      <GridCol xs={24} md={12} lg={12} span={6}>
        <Card hoverable rootClassName="statistic-card statistic-doing">
          <Title level={6}>{langs?.dashboard.doing}</Title>
          <Paragraph rootClassName="card-content">100</Paragraph>
        </Card>
      </GridCol>

      <GridCol xs={24} md={12} lg={12} span={6}>
        <Card hoverable rootClassName="statistic-card statistic-unfinished">
          <Title level={6}>{langs?.dashboard.unfinished}</Title>
          <Paragraph rootClassName="card-content">100</Paragraph>
        </Card>
      </GridCol>
    </GridRow>
  );
};

export default Statistics;
