"use client";

import { NextPage } from "next";
import { Control, UI } from "@/components";
import { ETaskStatus, Task } from "@/common/type/task";
import useLangs from "@/hooks/useLangs";

const { FormLayout } = Control;

const { Card } = UI;

const Task: NextPage = () => {
  const { langs } = useLangs();

  const initialData: Task = {
    title: "",
    content: "",
    status: ETaskStatus.UNDO,
  };

  const leftItems = <Card></Card>;

  const rightItems = <Card></Card>;

  return (
    <FormLayout<Task>
      initialData={initialData}
      headTitle={langs?.task.form.createTitle}
      leftItems={leftItems}
      rightItems={rightItems}
    />
  );
};

export default Task;
