"use client";

import React from "react";
import { NextPage } from "next";
import { UI } from "@/components";

const { Divider, Tooltip } = UI;

const style: React.CSSProperties = { padding: "10px", background: "red" };

const Home: NextPage = () => {
  return <main>
    <Tooltip></Tooltip>
  </main>;
};

export default Home;
