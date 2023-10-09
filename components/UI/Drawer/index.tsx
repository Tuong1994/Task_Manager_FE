import React from "react";
import { FaTimes } from "react-icons/fa";
import useRender from "@/hooks/useRender";
import useTheme from "@/hooks/useTheme";

export interface DrawerProps {
  rootClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  open?: boolean;
  header?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
  onClose?: () => void;
}

const Drawer: React.ForwardRefRenderFunction<HTMLDivElement, DrawerProps> = (
  {
    rootClassName = "",
    headerClassName = "",
    bodyClassName = "",
    style,
    headerStyle,
    bodyStyle,
    header,
    children,
    open = false,
    onClose,
  },
  ref
) => {
  const render = useRender(open);

  const themeClassName = useTheme("drawer-wrap");

  const backdropActiveClassName = open ? "drawer-backdrop-active" : "";

  const wrapActiveClassName = open ? "drawer-wrap-active" : "";

  const bodyHeightClassName = header ? "wrap-body-height" : "";

  return (
    <React.Fragment>
      {render && <div className={`drawer-backdrop ${backdropActiveClassName}`} onClick={onClose} />}

      {render && (
        <div
          ref={ref}
          style={style}
          className={`drawer-wrap ${wrapActiveClassName} ${themeClassName} ${rootClassName}`}
        >
          {header && (
            <div style={headerStyle} className={`wrap-header ${headerClassName}`}>
              <React.Fragment>{header}</React.Fragment>
              <FaTimes size={16} className="header-icon" onClick={onClose} />
            </div>
          )}

          <div style={bodyStyle} className={`wrap-body ${bodyHeightClassName} ${bodyClassName}`}>
            {children}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default React.forwardRef(Drawer);
