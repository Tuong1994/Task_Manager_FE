"use client";

import React from "react";
import * as UI from "../..";
import Translate from "./Translate";
import Profile from "./Profile";
import MenuButton from "./MenuButton";
import ThemeButton from "./ThemeButton";
import Logo from "./Logo";
import Menu from "./Menu";

const { Grid } = UI;

const { GridRow, GridCol } = Grid;

interface HeaderProps {}

const Header: React.ForwardRefRenderFunction<HTMLDivElement, HeaderProps> = ({}, ref) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpenMenu = () => setOpen(true);

  const handleCloseMenu = () => setOpen(false);

  return (
    <div ref={ref} className="layout-header">
      <GridRow align="middle" justify="between">
        <GridCol xs={22} md={14} lg={16} span={18}>
          <Logo />
        </GridCol>

        <GridCol xs={2} md={10} lg={8} span={6}>
          <GridRow align="middle" justify="between">
            <GridCol xs={0} md={8} lg={8} span={8}>
              <ThemeButton />
            </GridCol>

            <GridCol xs={0} md={8} lg={8} span={8}>
              <Translate />
            </GridCol>

            <GridCol xs={0} md={0} lg={8} span={8}>
              <Profile />
            </GridCol>

            <GridCol xs={24} md={8} lg={0} span={0}>
              <MenuButton onClick={handleOpenMenu} />
            </GridCol>
          </GridRow>
        </GridCol>
      </GridRow>

      <Menu open={open} onClose={handleCloseMenu} />
    </div>
  );
};

export default React.forwardRef(Header);
