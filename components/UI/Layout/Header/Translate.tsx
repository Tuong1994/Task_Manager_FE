"use client";

import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import { switchLang } from "@/redux/slice/langSlice";
import { ELang } from "@/common/interface/lang";
import useLangs from "@/hooks/useLangs";

interface TranslateProps {}

const Translate: React.FC<TranslateProps> = () => {
  const { type } = useLangs();

  const dispatch = useAppDispatch();

  const vnBtnActiveClassName = type === ELang.VN ? "translate-action-active" : "";

  const engBtnActiveClassName = type === ELang.ENG ? "translate-action-active" : "";

  const handleSwitchLang = (type: "vn" | "eng") => {
    if (type === "vn") return dispatch(switchLang(ELang.VN));

    return dispatch(switchLang(ELang.ENG));
  };

  return (
    <div className="header-translate">
      <button className={`translate-action ${vnBtnActiveClassName}`} onClick={() => handleSwitchLang("vn")}>
        VN
      </button>

      <div className="translate-divider" />

      <button className={`translate-action ${engBtnActiveClassName}`} onClick={() => handleSwitchLang("eng")}>
        ENG
      </button>
    </div>
  );
};

export default Translate;
