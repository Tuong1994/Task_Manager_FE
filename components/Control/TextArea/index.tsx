"use client";

import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useFormContext } from "react-hook-form";
import useLangs from "@/hooks/useLangs";
import FormItemContext from "../Form/Context";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rootClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  rootStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
  sizes?: "sm" | "md" | "lg";
  onChangeInput?: (text: string) => void;
}

const textarea: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  {
    rootClassName = "",
    labelClassName = "",
    inputClassName = "",
    rootStyle,
    labelStyle,
    inputStyle,
    label,
    sizes = "md",
    rows = 5,
    placeholder,
    disabled,
    value,
    onChangeInput,
    onBlur,
    ...restProps
  },
  ref
) => {
  const rhfMethods = useFormContext();

  const { isRhf, rhfName, rhfValue, rhfError, rhfOnChange, rhfOnBlur } = React.useContext(FormItemContext);

  const { langs } = useLangs();

  const sizeClassName = `textarea-${sizes}`;

  const gapClassName = !isRhf ? "textarea-gap" : "";

  const errorClassName = rhfError ? "textarea-group-error" : "";

  const disabledClassName = disabled ? "textarea-group-disabled" : "";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => onChangeInput?.(e.target.value);

  const handleBlur = () => (rhfOnBlur ? rhfOnBlur : onBlur);

  const handleClearInput = () => {
    if (rhfValue && rhfName) return rhfMethods.resetField(rhfName);

    onChangeInput?.("");
  };

  const renderValue = () => {
    if (rhfValue) return rhfValue;

    if (value) return value;

    return "";
  };

  const isClear = () => {
    if (rhfValue) return true;

    if (value) return true;

    return false;
  };

  const onChangeFn = rhfOnChange ? rhfOnChange : handleChange;

  return (
    <div style={rootStyle} className={`textarea ${gapClassName} ${sizeClassName} ${rootClassName}`}>
      {label && (
        <label style={labelStyle} htmlFor="textarea" className={`textarea-label ${labelClassName}`}>
          {label}
        </label>
      )}

      <div style={inputStyle} className={`textarea-group ${inputClassName} ${errorClassName} ${disabledClassName}`}>
        <textarea
          {...restProps}
          ref={ref}
          rows={rows}
          disabled={disabled}
          id="textarea"
          className="group-control"
          placeholder={`${placeholder ?? langs?.common.form.placeholder.type}...`}
          value={renderValue()}
          onChange={onChangeFn}
          onBlur={handleBlur()}
        />

        {isClear() && (
          <div className="group-clear-action" onClick={handleClearInput}>
            <FaTimesCircle size={12} />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(textarea);
