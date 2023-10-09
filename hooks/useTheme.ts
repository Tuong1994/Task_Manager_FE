import { useAppSelector } from "@/redux/hooks";

const useTheme = (className: string) => {
  let themeClassName = "";

  const { theme } = useAppSelector((state) => state.ThemeReducer);

  if (theme === "dark") themeClassName = `${className}-dark`;

  return themeClassName;
};

export default useTheme;
