"use client";

import React from "react";
import { NextPage } from "next";
import { UI } from "@/components";
import { EGender, EPosition, ERole, Staff } from "@/common/type/staff";
import { Columns } from "@/components/UI/Table";
import useLangs from "@/hooks/useLangs";

const { ContentHeader, Table, Badge } = UI;

const Staffs: NextPage = () => {
  const { langs } = useLangs();

  const dataSource: Staff[] = [
    {
      id: "staff_1",
      fullName: "Jack Williams",
      phone: "0793229950",
      email: "jack@gmail.com",
      gender: EGender.MALE,
      position: EPosition.PRODUCT,
      role: ERole.ADMIN,
    },
    {
      id: "staff_2",
      fullName: "Will Anderson",
      phone: "0545225539",
      email: "will@gmail.com",
      gender: EGender.MALE,
      position: EPosition.FRONTEND,
      role: ERole.STAFF,
    },
    {
      id: "staff_3",
      fullName: "Kevin Becon",
      phone: "0532217795",
      email: "kevin@gmail.com",
      gender: EGender.MALE,
      position: EPosition.BACKEND,
      role: ERole.STAFF,
    },
    {
      id: "staff_4",
      fullName: "Chrissy Hammerton",
      phone: "0892271569",
      email: "chrissy@gmail.com",
      gender: EGender.FEMALE,
      position: EPosition.DESIGN,
      role: ERole.STAFF,
    },
  ];

  const columns: Columns<Staff> = [
    { id: "name", title: langs?.common.table.fullName, dataIndex: "fullName" },
    { id: "phone", title: langs?.common.table.phone, dataIndex: "phone" },
    { id: "email", title: langs?.common.table.email, dataIndex: "email" },
    {
      id: "gender",
      title: langs?.common.table.gender,
      dataIndex: "gender",
      render: (gender) => (
        <Badge color="red">
          Male
        </Badge>
      ),
    },
    { id: "position", title: langs?.common.table.position, dataIndex: "position" },
    { id: "role", title: langs?.common.table.role, dataIndex: "role" },
  ];

  return (
    <React.Fragment>
      <ContentHeader title={langs?.staff.title} />

      <Table<Staff> dataSource={dataSource} columns={columns} />
    </React.Fragment>
  );
};

export default Staffs;
