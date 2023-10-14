import moment from "moment";
import React from "react";
import { FaCalendar, FaTimesCircle } from "react-icons/fa";

interface DatePickerControlProps {
  inputStyle?: React.CSSProperties;
  inputClassName?: string;
  prefixes?: React.ReactNode | React.ReactNode[];
  selectedDate: Date;
  format: string;
  rhfError: boolean;
  disabled?: boolean;
  handleOpen: () => void;
  handleClearInput: () => void;
}

const DatePickerControl: React.ForwardRefRenderFunction<HTMLDivElement, DatePickerControlProps> = (
  {
    inputStyle,
    inputClassName = "",
    prefixes,
    selectedDate,
    format,
    rhfError,
    disabled,
    handleOpen,
    handleClearInput,
  },
  ref
) => {
  const errorClassName = rhfError ? "wrap-group-error" : "";

  const disabledClassName = disabled ? "wrap-group-disabled" : "";

  const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate())

  const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

  const isClear = () => date.getTime() !== today.getTime();

  const renderSelectedDate = () => moment(selectedDate).format(format);

  return (
    <div
      style={inputStyle}
      className={`wrap-group ${inputClassName} ${errorClassName} ${disabledClassName}`}
      onClick={handleOpen}
    >
      {prefixes && <div className="group-prefix">{prefixes}</div>}

      <div className="group-control">
        <div ref={ref} className="control-input">
          {renderSelectedDate()}
        </div>

        {isClear() && (
          <div className="control-clear-action" onClick={handleClearInput}>
            <FaTimesCircle size={12} />
          </div>
        )}
      </div>

      <div className="group-suffix">
        <FaCalendar />
      </div>
    </div>
  );
};

export default React.forwardRef(DatePickerControl);
