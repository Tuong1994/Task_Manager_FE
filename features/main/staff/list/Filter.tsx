import React from "react";
import { UI, Control } from "@/components";

const { Space } = UI;

const { Input } = Control;

interface StaffsFilterProps {}

const StaffsFilter: React.FC<StaffsFilterProps> = ({}) => {
  return (
    <Space>
      <Input />
      <Input />
      <Input />
    </Space>
  );
};

export default StaffsFilter;
