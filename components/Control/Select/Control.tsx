import React from "react";
import { Langs } from "@/common/interface/lang";
import { FaAngleDown, FaTimesCircle } from "react-icons/fa";

interface SelectControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
  langs: Langs;
  open: boolean;
  rhfError: boolean;
  placeholder?: string;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
  prefixes?: React.ReactNode | React.ReactNode[];
  isClear: () => boolean;
  handleOpen: () => void;
  handleClearInput: () => void;
}

const SelectControl: React.ForwardRefRenderFunction<HTMLInputElement, SelectControlProps> = (
  {
    langs,
    open,
    rhfError,
    inputClassName,
    inputStyle,
    placeholder,
    prefixes,
    disabled,
    isClear,
    handleOpen,
    handleClearInput,
    ...restProps
  },
  ref
) => {
  const disabledClass = disabled ? "wrap-group-disabled" : "";

  const errorClassName = rhfError ? "wrap-group-error" : "";

  return (
    <div
      style={inputStyle}
      className={`wrap-group ${inputClassName} ${errorClassName} ${disabledClass}`}
      onClick={handleOpen}
    >
      {prefixes && <div className="group-prefix">{prefixes}</div>}

      <div className="group-control">
        <input
          {...restProps}
          ref={ref}
          disabled={disabled}
          id="select"
          type="text"
          className="control-input"
          placeholder={`${placeholder ?? langs?.common.form.placeholder.select}...`}
        />

        {isClear() && (
          <div className="control-clear-action" onClick={handleClearInput}>
            <FaTimesCircle size={12} />
          </div>
        )}
      </div>

      <div className="group-suffix">
        <FaAngleDown size={15} className={`suffix-icon ${open ? "suffix-icon-rotate" : ""}`} />
      </div>
    </div>
  );
};

export default React.forwardRef(SelectControl);
