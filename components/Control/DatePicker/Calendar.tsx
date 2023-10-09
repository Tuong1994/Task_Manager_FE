import React from "react";
import { SelectDate } from "@/common/type/form";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarDates from "./CalendarDates";
import useDateRange from "./useDateRange";

interface DatePickerCalendarProps {
  open: boolean;
  isBottom: boolean;
  selectedDate: Date;
  max?: "today" | string;
  min?: "today" | string;
  onSelectDate: (date: Date) => void;
}

const DatePickerCalendar: React.FC<DatePickerCalendarProps> = ({
  max,
  min,
  open,
  isBottom,
  selectedDate,
  onSelectDate,
}) => {
  const openClassName = open ? "wrap-calendar-active" : "";

  const bottomClassName = isBottom ? "wrap-calendar-bottom" : "";

  const [currentDate, setCurrentDate] = React.useState<Date>(selectedDate);

  const [currentMonth, setCurrentMonth] = React.useState<number>(new Date().getMonth());

  const [currentYear, setCurrentYear] = React.useState<number>(new Date().getFullYear());

  const dateRange = useDateRange(currentYear, currentMonth);

  const handleSelectMonth = (month: number) => setCurrentMonth(month);

  const handleSelectYear = (year: number) => setCurrentYear(year);

  const handleSwitchMonth = (type: "prev" | "next") => {
    const newMonth = type === "prev" ? currentMonth - 1 : currentMonth + 1;

    setCurrentMonth(newMonth);

    if (newMonth < 0 || newMonth > 11) {
      const newDate = new Date(currentYear, newMonth, new Date().getDate());

      setCurrentDate(newDate);

      setCurrentMonth(newDate.getMonth());

      setCurrentYear(newDate.getFullYear());
    } else setCurrentDate(new Date());
  };

  const handleSelectDate = (date: SelectDate) => {
    if (date.month < currentMonth || date.month > currentMonth) {
      setCurrentDate(date.fullDate);

      setCurrentMonth(date.fullDate.getMonth());

      setCurrentYear(date.fullDate.getFullYear());
    } else setCurrentDate(date.fullDate);

    onSelectDate(date.fullDate);
  };

  return (
    <div className={`wrap-calendar ${openClassName} ${bottomClassName}`}>
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        handleSelectMonth={handleSelectMonth}
        handleSelectYear={handleSelectYear}
        handleSwitchMonth={handleSwitchMonth}
      />

      <CalendarDays />

      <CalendarDates
        max={max}
        min={min}
        dates={dateRange}
        currentDate={currentDate}
        handleSelectDate={handleSelectDate}
      />
    </div>
  );
};

export default DatePickerCalendar;
