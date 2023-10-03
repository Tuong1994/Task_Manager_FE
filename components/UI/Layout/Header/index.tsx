import React from "react";
import * as UI from "../..";
import Image from "next/image";
import Translate from "./Translate";
import Profile from "./Profile";

const { Grid } = UI;

const { GridRow, GridCol } = Grid;

interface HeaderProps {}

const Header: React.ForwardRefRenderFunction<HTMLDivElement, HeaderProps> = ({}, ref) => {
  return (
    <div className="layout-header">
      <GridRow align="middle" justify="between">
        <GridCol span={12}>
          <Image width={150} alt="logo" src={require("../../../../public/logo.png")} />
        </GridCol>

        <GridCol span={4}>
          <Translate />
        </GridCol>

        <GridCol span={4}>
          <Profile />
        </GridCol>
      </GridRow>
    </div>
  );
};

export default React.forwardRef(Header);
