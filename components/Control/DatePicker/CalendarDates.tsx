import React from "react";
import { SelectDate } from "@/common/type/form";
import CalendarDateItem from "./CalendarDateItem";

interface CalendarDatesProps {
  max?: "today" | string;
  min?: "today" | string;
  dates: SelectDate[];
  currentDate: Date;
  handleSelectDate: (date: SelectDate) => void;
}

const CalendarDates: React.FC<CalendarDatesProps> = ({ max, min, dates, currentDate, handleSelectDate }) => {
  const dateOfCurrentMonthClassName = (type: "main" | "sub") => {
    if (type === "main") return "";
    return "item-inner-sub";
  };

  const selectedClassName = (d: SelectDate) => {
    if (
      d.date === currentDate.getDate() &&
      d.month === currentDate.getMonth() &&
      d.year === currentDate.getFullYear()
    ) {
      return "item-inner-selected";
    }

    return "";
  };

  return (
    <div className="calendar-dates">
      {dates.map((d, idx) => (
        <CalendarDateItem
          key={idx}
          date={d}
          max={max}
          min={min}
          selectedClassName={selectedClassName}
          dateOfCurrentMonthClassName={dateOfCurrentMonthClassName}
          handleSelectDate={handleSelectDate}
        />
      ))}
    </div>
  );
};

export default CalendarDates;
