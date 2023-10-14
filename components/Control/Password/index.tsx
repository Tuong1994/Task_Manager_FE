"use client";

import React from "react";
import { FaEye, FaEyeSlash, FaTimesCircle } from "react-icons/fa";
import { useFormContext } from "react-hook-form";
import FormItemContext from "../Form/Context";
import useLangs from "@/hooks/useLangs";

export interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rootClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  rootStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
  sizes?: "sm" | "md" | "lg";
  prefixes?: React.ReactNode | React.ReactNode[];
  suffixes?: React.ReactNode | React.ReactNode[];
  onChangeInput?: (text: string) => void;
}

const InputPassword: React.ForwardRefRenderFunction<HTMLInputElement, InputPasswordProps> = (
  {
    rootClassName = "",
    labelClassName = "",
    inputClassName = "",
    rootStyle,
    labelStyle,
    inputStyle,
    label,
    sizes = "md",
    prefixes,
    suffixes,
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

  const { isRhf, rhfName, rhfValue, rhfError, rhfDisabled, rhfOnChange, rhfOnBlur } =
    React.useContext(FormItemContext);

  const { langs } = useLangs();

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const controlDisabled = rhfDisabled ? rhfDisabled : disabled;

  const sizeClassName = `input-${sizes}`;

  const gapClassName = !isRhf ? "input-gap" : "";

  const errorClassName = rhfError ? "input-group-error" : "";

  const disabledClassName = controlDisabled ? "input-group-disabled" : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeInput?.(e.target.value);

  const handleBlur = () => (rhfOnBlur ? rhfOnBlur : onBlur);

  const handleClearInput = () => {
    if (rhfValue) return rhfMethods.resetField(rhfName);

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
    <div style={rootStyle} className={`input ${gapClassName} ${sizeClassName} ${rootClassName}`}>
      {label && (
        <label style={labelStyle} htmlFor="password" className={`input-label ${labelClassName}`}>
          {label}
        </label>
      )}

      <div
        style={inputStyle}
        className={`input-group ${inputClassName} ${errorClassName} ${disabledClassName}`}
      >
        {prefixes && <div className="group-prefix">{prefixes}</div>}

        <div className="group-control">
          <input
            {...restProps}
            ref={ref}
            disabled={controlDisabled}
            id="password"
            className="control-input"
            type={!showPassword ? "password" : "text"}
            placeholder={`${placeholder ?? langs?.common.form.placeholder.type}...`}
            value={renderValue()}
            onChange={onChangeFn}
            onBlur={handleBlur()}
          />

          {isClear() && (
            <div className="control-clear-action" onClick={handleClearInput}>
              <FaTimesCircle size={12} />
            </div>
          )}
        </div>

        <div
          className="group-suffix"
          onMouseDown={() => setShowPassword(true)}
          onMouseUp={() => setShowPassword(false)}
        >
          {!showPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(InputPassword);
