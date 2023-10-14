"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import FormItemContext from "../Form/Context";

export interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rootClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  rootStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
  sizes?: "sm" | "md" | "lg";
}

const CheckBox: React.ForwardRefRenderFunction<HTMLInputElement, CheckBoxProps> = (
  {
    rootClassName = "",
    labelClassName = "",
    inputClassName = "",
    rootStyle,
    labelStyle,
    inputStyle,
    label,
    sizes = "md",
    disabled,
    checked,
    onBlur,
    ...restProps
  },
  ref
) => {
  const { isRhf, rhfName, rhfValue, rhfError, rhfDisabled, rhfOnChange, rhfOnBlur } =
    React.useContext(FormItemContext);

  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const controlDisabled = rhfDisabled ? rhfDisabled : disabled;

  const controlCheckedClassName = isChecked ? "group-control-checked" : "";

  const sizeClassName = `checkbox-${sizes}`;

  const gapClassName = !isRhf ? "checkbox-gap" : "";

  const errorClassName = rhfError ? "checkbox-group-error" : "";

  const disabledClassName = controlDisabled ? "checkbox-group-disabled" : "";

  React.useEffect(() => {
    let defaultChecked: boolean = false;

    if (rhfValue && rhfName) defaultChecked = rhfValue;
    else if (checked) defaultChecked = checked;

    setIsChecked(defaultChecked);
  }, [rhfValue, rhfName, rhfDisabled, checked]);

  const iconSize = () => {
    const sizeValue: { [x: string]: number } = {
      sm: 7,
      md: 9,
      lg: 12,
    };
    return sizeValue[sizes];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(!e.target.checked);

  const handleBlur = () => (rhfOnBlur ? rhfOnBlur : onBlur);

  const onChangeFn = rhfOnChange ? rhfOnChange : handleChange;

  return (
    <div style={rootStyle} className={`checkbox ${gapClassName} ${sizeClassName} ${rootClassName}`}>
      <label className={`checkbox-group ${errorClassName} ${disabledClassName}`}>
        <input
          {...restProps}
          ref={ref}
          disabled={controlDisabled}
          type="checkbox"
          className="group-input"
          onChange={onChangeFn}
          onBlur={handleBlur}
        />

        <div style={inputStyle} className={`group-control ${controlCheckedClassName} ${inputClassName}`}>
          {isChecked && <FaCheck size={iconSize()} />}
        </div>

        <span style={labelStyle} className={`group-label ${labelClassName}`}>
          {label}
        </span>
      </label>
    </div>
  );
};

export default React.forwardRef(CheckBox);
