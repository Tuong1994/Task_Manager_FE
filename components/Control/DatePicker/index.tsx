"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import DatePickerControl from "./Control";
import DatePickerCalendar from "./Calendar";
import FormItemContext from "../Form/Context";
import useRender from "@/hooks/useRender";
import useClickOutside from "@/hooks/useClickOutside";
import useDetectBottom from "@/hooks/useDetectBottom";

export interface DatePickerProps {
  rootClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  rootStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
  format?: string;
  disabled?: boolean;
  value?: Date;
  sizes?: "sm" | "md" | "lg";
  max?: "today" | string;
  min?: "today" | string;
  prefixes?: React.ReactNode | React.ReactNode[];
  onChange?: (date: Date) => void;
}

const DatePicker: React.ForwardRefRenderFunction<HTMLDivElement, DatePickerProps> = (
  {
    rootClassName = "",
    labelClassName = "",
    inputClassName = "",
    rootStyle,
    labelStyle,
    inputStyle,
    label,
    prefixes,
    disabled,
    value = new Date(),
    sizes = "md",
    format = "DD/MM/YYYY",
    max,
    min,
    onChange,
  },
  ref
) => {
  const rhfMethods = useFormContext();

  const { isRhf, rhfName, rhfValue, rhfError, rhfDisabled } = React.useContext(FormItemContext);

  const controlDisabled = rhfDisabled ? rhfDisabled : disabled;

  const sizeClassName = `datepicker-${sizes}`;

  const gapClassName = !isRhf ? "datepicker-gap" : "";

  const [open, setOpen] = React.useState<boolean>(false);

  const [selectedDate, setSelectedDate] = React.useState<Date>(value);

  const datePickerRef = React.useRef<HTMLDivElement>(null);

  const render = useRender(open);

  const isBottom = useDetectBottom(datePickerRef);

  useClickOutside(datePickerRef, setOpen);

  React.useEffect(() => rhfMethods.setValue(rhfName, new Date()), []);

  React.useEffect(() => {
    if (rhfValue) setSelectedDate(rhfValue);
  }, [rhfValue]);

  const handleOpen = () => setOpen(!open);

  const handleClearInput = () => setSelectedDate(new Date());

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);

    onChange?.(date);

    if (isRhf) rhfMethods.setValue(rhfName, date);
  };

  return (
    <div
      ref={datePickerRef}
      style={rootStyle}
      className={`datepicker ${gapClassName} ${sizeClassName} ${rootClassName}`}
    >
      {label && (
        <label style={labelStyle} className={`datepicker-label ${labelClassName}`}>
          {label}
        </label>
      )}

      <div className="datepicker-wrap">
        <DatePickerControl
          ref={ref}
          format={format}
          prefixes={prefixes}
          rhfError={rhfError}
          disabled={controlDisabled}
          inputStyle={inputStyle}
          inputClassName={inputClassName}
          selectedDate={selectedDate}
          handleOpen={handleOpen}
          handleClearInput={handleClearInput}
        />

        {render && (
          <DatePickerCalendar
            max={max}
            min={min}
            open={open}
            isBottom={isBottom}
            selectedDate={selectedDate}
            onSelectDate={handleSelectDate}
          />
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(DatePicker);
