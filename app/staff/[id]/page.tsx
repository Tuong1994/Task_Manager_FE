"use client"

import { NextPage } from "next";
import { Control, UI } from "@/components";
import { EGender, EPosition, ERole, Staff } from "@/common/type/staff";

const { FormLayout } = Control;

const { Card } = UI;

const Staff: NextPage = () => {
  const initialData: Staff = {
    fullName: "",
    phone: "",
    email: "",
    gender: EGender.MALE,
    position: EPosition.FRONTEND,
    role: ERole.STAFF,
  };

  const leftItems = <Card></Card>;

  const rightItems = <Card></Card>;

  return (
    <FormLayout<Staff>
      initialData={initialData}
      headTitle="Staff"
      leftItems={leftItems}
      rightItems={rightItems}
    />
  );
};

export default Staff;
