import React from "react";
import { UI, Control } from "@/components";

const { Space } = UI;

const { Input } = Control;

interface StaffListFilterProps {}

const StaffListFilter: React.FC<StaffListFilterProps> = ({}) => {
  const [filter, setFilter] = React.useState("");

  return (
    <Space>
      <Input value={filter} onChangeInput={(text) => setFilter(text)} />
      <Input />
      <Input />
    </Space>
  );
};

export default StaffListFilter;
