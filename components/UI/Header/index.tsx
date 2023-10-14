"use client";

import React from "react";
import * as UI from "..";
import { GridColProps } from "../Grid/Col";
import Translate from "./Translate";
import Profile from "./Profile";
import MenuButton from "./MenuButton";
import ThemeButton from "./ThemeButton";
import Logo from "./Logo";
import Menu from "./Menu";
import useTheme from "@/hooks/useTheme";

const { Grid } = UI;

const { GridRow, GridCol } = Grid;

interface HeaderProps {
  isAuth?: boolean;
}

const Header: React.ForwardRefRenderFunction<HTMLDivElement, HeaderProps> = ({ isAuth = true }, ref) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const themeClassName = useTheme("header");

  const handleOpenMenu = () => setOpen(true);

  const handleCloseMenu = () => setOpen(false);

  const commonProps: GridColProps = {
    xs: isAuth ? 8 : 12,
    md: isAuth ? 8 : 12,
    lg: isAuth ? 8 : 12,
    span: isAuth ? 8 : 12,
  };

  return (
    <div ref={ref} className={`header ${themeClassName}`}>
      <GridRow align="middle" justify={isAuth ? "between" : "end"}>
        {isAuth && (
          <GridCol xs={22} md={14} lg={16} span={18}>
            <Logo />
          </GridCol>
        )}

        <GridCol xs={isAuth ? 2 : 18} md={isAuth ? 10 : 12} lg={8} span={6}>
          <GridRow align="middle" justify="between">
            <GridCol {...commonProps}>
              <ThemeButton />
            </GridCol>

            <GridCol {...commonProps}>
              <Translate />
            </GridCol>

            {isAuth && (
              <GridCol xs={0} md={0} lg={8} span={8}>
                <Profile />
              </GridCol>
            )}

            {isAuth && (
              <GridCol xs={24} md={8} lg={0} span={0}>
                <MenuButton onClick={handleOpenMenu} />
              </GridCol>
            )}
          </GridRow>
        </GridCol>
      </GridRow>

      {isAuth && <Menu open={open} onClose={handleCloseMenu} />}
    </div>
  );
};

export default React.forwardRef(Header);
