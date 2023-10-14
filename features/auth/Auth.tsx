"use client";

import React from "react";
import { Grid, Section, Header } from "@/components/UI";
import Content from "./Content";
import LoginForm from "./LoginForm";
import useTheme from "@/hooks/useTheme";

const { GridRow, GridCol } = Grid;

interface AuthProps {
  isAuth: boolean;
}

const Auth: React.FC<AuthProps> = ({ isAuth = false }) => {
  const themeClassName = useTheme("auth");

  return (
    <React.Fragment>
      <Header isAuth={isAuth} />

      <Section rootClassName={`auth ${themeClassName}`}>
        <GridRow gutters={[50]} rootClassName="auth-inner" justify="center">
          <GridCol xs={24} md={24} lg={12} span={12}>
            <Content />
          </GridCol>

          <GridCol xs={24} md={24} lg={12} span={12}>
            <LoginForm />
          </GridCol>
        </GridRow>
      </Section>
    </React.Fragment>
  );
};

export default Auth;
