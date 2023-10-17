"use client";

import React from "react";
import { UI, Control } from "@/components";
import { NextPage } from "next";
import useLangs from "@/hooks/useLangs";

const { ContentHeader, Grid, Card, Image } = UI;

const { Upload } = Control;

const { GridRow, GridCol } = Grid;

const { UploadSingle } = Upload;

const AccountInfo: NextPage = () => {
  const { langs } = useLangs();

  return (
    <React.Fragment>
      <ContentHeader title={langs?.account.title} />

      <UploadSingle />
    </React.Fragment>
  );
};

export default AccountInfo;
