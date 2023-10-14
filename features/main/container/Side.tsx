"use client";

import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Tooltip from "@/components/UI/Tooltip";
import Space from "@/components/UI/Space";
import Link from "next/link";
import useMenu from "@/hooks/useMenu";
import useTheme from "@/hooks/useTheme";

interface SideProps {}

const Side: React.ForwardRefRenderFunction<HTMLDivElement, SideProps> = ({}, ref) => {
  const menus = useMenu();

  const pathname = usePathname();

  const themeClassName = useTheme("container-side");

  const [collapse, setCollapse] = React.useState<boolean>(false);

  const collpaseClassName = collapse ? "container-side-collapse" : "";

  const collapseLabelClassName = collapse ? "inner-label-hide" : "";

  const collapseActionClassName = collapse ? "action-icon-collapse" : "";

  const routeActiveClassName = (path: string) => {
    const urlSplit = pathname.split("/");

    const currentPathSplit = path.split("/");

    if (urlSplit[1] === currentPathSplit[1]) return "menu-item-active";

    return "";
  };

  const handleCollapse = () => setCollapse(!collapse);

  return (
    <div ref={ref} className={`container-side ${themeClassName} ${collpaseClassName}`}>
      <div className="side-menu">
        {menus.map((menu) => (
          <Tooltip
            key={menu.id}
            rootClassName={`menu-item ${routeActiveClassName(menu.path as string)}`}
            titleClassName="item-wrap"
            content={collapse ? menu.label : ""}
            placement="right"
          >
            <Link href={menu.path as string}>
              <Space
                rootClassName="wrap-inner"
                justify={collapse ? "center" : "start"}
                size={collapse ? 0 : 10}
              >
                <div className="inner-icon">{menu.icon}</div>

                <div className={`inner-label ${collapseLabelClassName}`}>{menu.label}</div>
              </Space>
            </Link>
          </Tooltip>
        ))}
      </div>

      <button className="side-action" onClick={handleCollapse}>
        <FaAngleLeft size={18} className={`action-icon ${collapseActionClassName}`} />
      </button>
    </div>
  );
};

export default React.forwardRef(Side);
