"use client";

import React from "react";
import { NextPage } from "next";
import { UI } from "@/components";
import { ETaskStatus, Task } from "@/common/type/task";
import { Columns } from "@/components/UI/Table";
import { EGender, EPosition, ERole, Staff } from "@/common/type/staff";
import TasksFilter from "@/features/main/task/list/Filter";
import Link from "next/link";
import useLangs from "@/hooks/useLangs";
import useRenderContent from "@/features/main/task/hooks/useRenderContent";

const { ContentHeader, Table, Space, Button, Pagination } = UI;

const Tasks: NextPage = () => {
  const { langs } = useLangs();

  const { renderStatus } = useRenderContent();

  const dataSource: Task[] = [
    {
      id: "task_1",
      title: "Task 1",
      content: "",
      assignBy: null,
      status: ETaskStatus.UNDO,
    },
    {
      id: "task_2",
      title: "Task 2",
      content: "",
      assignBy: {
        id: "staff_3",
        fullName: "Kevin Becon",
        phone: "0532217795",
        email: "kevin@gmail.com",
        gender: EGender.MALE,
        position: EPosition.BACKEND,
        role: ERole.STAFF,
      },
      status: ETaskStatus.DOING,
    },
    {
      id: "task_3",
      title: "Task 3",
      content: "",
      assignBy: {
        id: "staff_4",
        fullName: "Chrissy Hammerton",
        phone: "0892271569",
        email: "chrissy@gmail.com",
        gender: EGender.FEMALE,
        position: EPosition.DESIGN,
        role: ERole.STAFF,
      },
      status: ETaskStatus.FINISHED,
    },
  ];

  const columns: Columns<Task> = [
    { id: "title", title: "Title", dataIndex: "title" },
    {
      id: "assign",
      title: "Assigned",
      dataIndex: "assignBy",
      render: (data: Staff | null) => <>{data ? data.fullName : "--"}</>,
    },
    { id: "status", title: "Status", dataIndex: "status", render: (status) => renderStatus(status) },
  ];

  return (
    <React.Fragment>
      <ContentHeader
        title={langs?.task.list.title}
        total={dataSource.length}
        actions={
          <Space justify="end">
            <Button variant="success">{langs?.common.actions.export}</Button>

            <Link href="/task/1">
              <Button variant="primary">{langs?.task.list.action}</Button>
            </Link>
          </Space>
        }
      />

      <Table<Task>
        hasFilter
        hasSelectRow
        dataSource={dataSource}
        columns={columns}
        filter={<TasksFilter />}
      />

      <Pagination showContent />
    </React.Fragment>
  );
};

export default Tasks;
