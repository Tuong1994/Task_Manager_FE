import React from "react";
import type { Metadata } from "next";
import { UI } from "@/components";
import Providers from "@/redux/Provider";
import "@/style/main.scss";

const { Layout } = UI;

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Application task management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <React.Fragment>
            <Layout>{children}</Layout>
            <div id="portal"></div>
          </React.Fragment>
        </Providers>
      </body>
    </html>
  );
}
