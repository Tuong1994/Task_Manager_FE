"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { FaTimes } from "react-icons/fa";
import Button, { ButtonProps } from "../Button";
import useRender from "@/hooks/useRender";
import useOverflow from "@/hooks/useOverflow";

interface ModalAction extends ButtonProps {
  title?: string;
}

export interface ModalProps {
  rootClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
  okButtonProps?: ModalAction;
  cancelButtonProps?: ModalAction;
  open?: boolean;
  onOk?(): void;
  onCancel?(): void;
}

const Modal: React.ForwardRefRenderFunction<HTMLDivElement, ModalProps> = (
  {
    rootClassName = "",
    headerClassName = "",
    bodyClassName = "",
    footerClassName = "",
    style,
    headerStyle,
    bodyStyle,
    footerStyle,
    title = "Modal header",
    children,
    size = "md",
    okButtonProps,
    cancelButtonProps,
    open = false,
    onOk,
    onCancel,
  },
  ref
) => {
  const { langs } = useAppSelector((state) => state.LangReducer);

  const render = useRender(open);

  useOverflow(open);

  const backdropActiveClassName = () => (open ? "modal-backdrop-active" : "");

  const modalActiveClassName = () => (open ? "modal-active" : "");

  const sizeClassName = () => `modal-${size}`;

  return render ? (
    <React.Fragment>
      <div className={`modal-backdrop ${backdropActiveClassName()}`} onClick={onCancel} />

      <div
        ref={ref}
        style={style}
        className={`modal ${modalActiveClassName()} ${sizeClassName()} ${rootClassName}`}
      >
        <div style={headerStyle} className={`modal-header ${headerClassName}`}>
          <p>{title}</p>
          <FaTimes className="header-icon" onClick={onCancel} />
        </div>

        <div style={bodyStyle} className={`modal-body ${bodyClassName}`}>
          {children}
        </div>

        <div style={footerStyle} className={`modal-footer ${footerClassName}`}>
          <Button {...cancelButtonProps} onClick={onCancel}>
            {cancelButtonProps?.title ?? langs?.common.actions.cancel}
          </Button>
          <Button {...okButtonProps} variant={okButtonProps?.variant ?? "primary"} onClick={onOk}>
            {okButtonProps?.title ?? langs?.common.actions.ok}
          </Button>
        </div>
      </div>
    </React.Fragment>
  ) : null;
};

export default React.forwardRef(Modal);
