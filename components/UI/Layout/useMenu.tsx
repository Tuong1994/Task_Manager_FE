import { MenuItem } from "@/common/type/base";
import { FaChartLine, FaTasks, FaUser } from "react-icons/fa";
import useLangs from "@/hooks/useLangs";

const useMenu = () => {
  const { langs } = useLangs();

  const iconProps = { size: 16 };

  const menu: MenuItem[] = [
    {
      id: "dashboard",
      path: "/",
      label: langs?.menu.dashboard,
      icon: <FaChartLine {...iconProps} />,
    },
    {
      id: "staff",
      path: "/staff/list",
      label: langs?.menu.staff,
      icon: <FaUser {...iconProps} />,
    },
    {
      id: "task",
      path: "/task/list",
      label: langs?.menu.task,
      icon: <FaTasks {...iconProps} />,
    },
  ];

  return menu;
};

export default useMenu;
