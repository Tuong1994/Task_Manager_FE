import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { UI } from "@/components";
import { Langs } from "@/common/type/lang";

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTitle, Tooltip, Legend);

const { Card, Typography } = UI;

const { Title } = Typography;

interface ChartProps {
  langs: Langs;
}

const Chart: React.FC<ChartProps> = ({ langs }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Task",
      },
    },
    maintainAspectRatio: false,
  };

  const labels = ["January", "February", "March", "April", "May", "June", "July"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 200, 300, 600, 400, 500, 1000, 600, 800, 900, 700],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [100, 200, 300, 600, 400, 500, 1000, 600, 800, 900, 700],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="dashboard-chart">
      <Title level={5}>{langs?.dashboard.chartTitle}</Title>

      <Card bodyClassName="chart-view">
        <Bar width="100%" height="100%" data={data} options={options} />
      </Card>
    </div>
  );
};

export default Chart;
