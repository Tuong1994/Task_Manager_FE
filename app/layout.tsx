import React from "react";
import type { Metadata } from "next";
import Providers from "@/redux/Provider";
import Auth from "@/features/auth/Auth";
import Container from "@/features/main/container";
import "@/style/main.scss";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Application task management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isAuth = true;

  return (
    <html lang="en">
      <body>
        <Providers>
          <React.Fragment>
            {isAuth ? <Container>{children}</Container> : <Auth isAuth={isAuth} />}
            <div id="portal"></div>
          </React.Fragment>
        </Providers>
      </body>
    </html>
  );
}
