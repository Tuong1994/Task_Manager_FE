import React from "react";
import { SelectDate } from "@/common/interface/form";

const useDateRange = (year: number, month: number) => {
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay();

  const generateDate = (fullDate: Date, date: number, type: "main" | "sub"): SelectDate => {
    return {
      fullDate,
      date,
      type,
      day: fullDate.getDate(),
      month: fullDate.getMonth(),
      year: fullDate.getFullYear(),
    };
  };

  const dateRange = React.useMemo(() => {
    const dates: SelectDate[] = [];

    // Previous dates of month
    for (let i = firstDayOfMonth; i > 0; i--) {
      const newDate = new Date(year, month - 1, lastDateOfPrevMonth - i + 1);

      const date = generateDate(newDate, lastDateOfPrevMonth - i + 1, "sub");

      dates.push(date);
    }

    // Current dates of month
    for (let i = 1; i < lastDateOfMonth; i++) {
      const newDate = new Date(year, month, i);

      const date = generateDate(newDate, i, "main");

      dates.push(date);
    }

    // Next dates of month
    for (let i = lastDayOfMonth; i < 7; i++) {
      const newDate = new Date(year, month + 1, i - lastDayOfMonth + 1);

      const date = generateDate(newDate, i - lastDayOfMonth + 1, "sub");

      dates.push(date);
    }

    return dates;
  }, [lastDateOfMonth, lastDateOfPrevMonth, firstDayOfMonth, lastDayOfMonth]);

  return dateRange;
};

export default useDateRange;
