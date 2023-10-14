import React from "react";
import Drawer from "../Drawer";
import Space from "../Space";
import ThemeButton from "./ThemeButton";
import Profile from "./Profile";
import Translate from "./Translate";
import useMenu from "@/hooks/useMenu";
import useTheme from "@/hooks/useTheme";
import useViewpoint from "@/hooks/useViewpoint";

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ open, onClose }) => {
  const menus = useMenu();

  const themeClassName = useTheme("header-menu");

  const { isPhone } = useViewpoint();

  const header = (
    <Space size={20}>
      {isPhone && <ThemeButton />}
      <Profile />
    </Space>
  );

  return (
    <div className={`header-menu ${themeClassName}`}>
      <Drawer header={header} bodyClassName="menu-inner" open={open} onClose={onClose}>
        <div className="inner-list">
          {menus.map((menu) => (
            <Space key={menu.id}>
              <div>{menu.icon}</div>
              <div>{menu.label}</div>
            </Space>
          ))}
        </div>

        {isPhone && (
          <Space rootClassName="inner-footer" justify="center">
            <Translate />
          </Space>
        )}
      </Drawer>
    </div>
  );
};

export default Menu;
