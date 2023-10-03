import React from "react";
import { SelectDate } from "@/common/interface/form";
import useSelectRange from "./useSelectRange";

interface CalendarDateItemProps {
  date: SelectDate;
  max?: "today" | string;
  min?: "today" | string;
  handleSelectDate: (date: SelectDate) => void;
  selectedClassName: (date: SelectDate) => string;
  dateOfCurrentMonthClassName: (type: "main" | "sub") => string;
}

const CalendarDateItem: React.FC<CalendarDateItemProps> = ({
  date,
  max,
  min,
  handleSelectDate,
  selectedClassName,
  dateOfCurrentMonthClassName,
}) => {
  const selectRange = useSelectRange({ date, max, min });

  return (
    <button
      disabled={selectRange.disabled}
      className={`dates-item ${selectRange.className}`}
      onClick={() => handleSelectDate(date)}
    >
      <div className={`item-inner ${dateOfCurrentMonthClassName(date.type)} ${selectedClassName(date)}`}>
        {date.date}
      </div>
    </button>
  );
};

export default CalendarDateItem;
