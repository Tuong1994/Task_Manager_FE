import React from "react";
import { FaLightbulb, FaMoon } from "react-icons/fa";
import { switchTheme } from "@/redux/slice/themeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Space from "../../Space";
import Switch from "../../Switch";

interface ThemeButtonProps {}

const ThemeButton: React.FC<ThemeButtonProps> = () => {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  const dispatch = useAppDispatch();

  const handleSwitchTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (checked) return dispatch(switchTheme("dark"));

    return dispatch(switchTheme("light"));
  };

  return (
    <Space size={5} rootClassName="header-theme-button">
      <FaLightbulb />

      <Switch checked={theme === "dark"} sizes="sm" onChange={handleSwitchTheme} />

      <FaMoon />
    </Space>
  );
};

export default ThemeButton;
