import React from "react";
import { SelectDate } from "@/common/interface/form";

const useSelectRange = (args: { date: SelectDate; max?: "today" | string; min?: "today" | string }) => {
  const { date, max, min } = args;

  const selectRange = React.useMemo(() => {
    const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime();

    const calendarDate = date.fullDate.getTime();

    let className: string = "";

    let disabled: boolean = false;

    //  Case 1: min and max are not defined
    if (!min && !max) return { className, disabled };

    //  Case 2: min is defined and max not defined
    if (min && !max) {
      if (min === "today" && calendarDate < today) {
        className = "dates-item-disabled";
        disabled = true;
      }

      if (calendarDate < new Date(min).getTime()) {
        className = "dates-item-disabled";
        disabled = true;
      }
    }

    //  Case 3: max is defined and min not defined
    if (!min && max) {
      if (max === "today" && calendarDate > today) {
        className = "dates-item-disabled";
        disabled = true;
      }

      if (calendarDate > new Date(max).getTime()) {
        className = "dates-item-disabled";
        disabled = true;
      }
    }

    //  Case 4: both max and min are defined
    if (min && max) {
      // both max and min value are "today"
      if (max === "today" && min === "today" && calendarDate !== today) {
        className = "dates-item-disabled";
        disabled = true;
      }

      // max value is "today" and min value are specific date
      if (max === "today" && min !== "today") {
        if (calendarDate > today || calendarDate < new Date(min).getTime()) {
          className = "dates-item-disabled";
          disabled = true;
        }
      }

      // min value is "today" and max value are specific date
      if (max !== "today" && min === "today") {
        if (calendarDate < today || calendarDate > new Date(max).getTime()) {
          className = "dates-item-disabled";
          disabled = true;
        }
      }

      // both max and min value are specific date
      if (calendarDate < new Date(min).getTime() || calendarDate > new Date(max).getTime()) {
        className = "dates-item-disabled";
        disabled = true;
      }
    }

    return { className, disabled };
  }, [date, max, min]);

  return selectRange;
};

export default useSelectRange;
