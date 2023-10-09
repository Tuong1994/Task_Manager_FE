import React from "react";
import { Langs } from "@/common/type/lang";
import { FaAngleDown, FaTimesCircle } from "react-icons/fa";

interface SelectTagControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
  langs: Langs;
  open: boolean;
  rhfError: boolean;
  search: string;
  placeholder?: string;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
  prefixes?: React.ReactNode | React.ReactNode[];
  handleOpen: () => void;
  handleClearInput: () => void;
}

const SelectTagControl: React.ForwardRefRenderFunction<HTMLInputElement, SelectTagControlProps> = (
  {
    langs,
    open,
    rhfError,
    search,
    inputClassName,
    inputStyle,
    placeholder,
    prefixes,
    disabled,
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
          id="select"
          type="text"
          className="control-input"
          disabled={disabled}
          placeholder={`${placeholder ?? langs?.common.form.placeholder.select}...`}
        />

        {search && (
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

export default React.forwardRef(SelectTagControl);
