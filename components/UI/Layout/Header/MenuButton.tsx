import React from "react";
import { FaBars } from "react-icons/fa";
import Space from "../../Space";

interface MenuButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const MenuButton: React.FC<MenuButtonProps> = ({ ...restProps }) => {
  return (
    <Space justify="center">
      <button {...restProps} className="header-menu-button">
        <FaBars size={16} />
      </button>
    </Space>
  );
};

export default MenuButton;
