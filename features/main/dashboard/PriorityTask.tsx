import React from "react";
import { UI } from "@/components";
import { Langs } from "@/common/type/lang";
import Link from "next/link";

const { Card, Space, Badge, Typography } = UI;

const { Title, Paragraph } = Typography;

interface PriorityTaskProps {
  langs: Langs;
}

const PriorityTask: React.FC<PriorityTaskProps> = ({ langs }) => {
  return (
    <React.Fragment>
      <Title level={5}>{langs?.dashboard.priority}</Title>

      <Card bodyClassName="dashboard-task-body">
        {[...Array(5)].map((_, idx) => (
          <Link className="body-item" href="/" key={idx}>
            <Card rootClassName="item-wrap">
              <Space rootClassName="wrap-head">
                <Paragraph rootClassName="head-title">Task name</Paragraph>
              </Space>

              <Space size={4} rootClassName="wrap-badges">
                <Badge variant="danger">Priority</Badge>
                <Badge variant="primary">FE</Badge>
                <Badge variant="warning">UI</Badge>
              </Space>
            </Card>
          </Link>
        ))}
      </Card>
    </React.Fragment>
  );
};

export default PriorityTask;
