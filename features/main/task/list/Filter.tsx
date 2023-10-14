import React from "react";
import { UI, Control } from "@/components";

const { Space } = UI;

const { Input } = Control;

interface TasksFilterProps {}

const TasksFilter: React.FC<TasksFilterProps> = () => {
  return (
    <Space>
      <Input />
      <Input />
      <Input />
    </Space>
  );
};

export default TasksFilter;
