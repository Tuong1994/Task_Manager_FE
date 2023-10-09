"use client";

import React from "react";
import { MenuItem } from "@/common/type/base";
import useRender from "@/hooks/useRender";
import useClickOutside from "@/hooks/useClickOutside";

export interface DropdownProps {
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
  placement?: "left" | "right";
  trigger?: "click" | "hover";
  items: MenuItem[];
}

const Dropdown: React.ForwardRefRenderFunction<HTMLDivElement, DropdownProps> = (
  { rootClassName = "", style, placement = "left", trigger = "click", items = [], children },
  ref
) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const render = useRender(open);

  useClickOutside(dropdownRef, setOpen);

  const activeClassName = open ? "dropdown-menu-active" : "";

  const placementClassName = `dropdown-menu-${placement}`;

  const handleOpen = () => setOpen(!open);

  const handleClick = () => trigger === "click" && handleOpen();

  const handleHover = () => trigger === "hover" && handleOpen();

  return (
    <div ref={dropdownRef} style={style} className={`dropdown ${rootClassName}`}>
      <div
        ref={ref}
        className="dropdown-title"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {children}
      </div>

      {render && (
        <div className={`dropdown-menu ${placementClassName} ${activeClassName}`}>
          {items.map((item) => (
            <div key={item.id} className="menu-item">
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.forwardRef(Dropdown);
