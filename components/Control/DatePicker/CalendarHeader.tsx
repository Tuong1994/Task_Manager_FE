import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CalendarHeaderSelect from "./CalendarHeaderSelect";

interface CalendarHeaderProps {
  currentMonth: number;
  currentYear: number;
  handleSelectMonth: (month: number) => void;
  handleSelectYear: (year: number) => void;
  handleSwitchMonth: (type: "prev" | "next") => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  currentYear,
  handleSelectMonth,
  handleSelectYear,
  handleSwitchMonth,
}) => {
  const months = [
    "Janunary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = () => {
    let startYear = 1970;

    const y: number[] = [];

    const currentYear = new Date().getFullYear();

    while (startYear <= currentYear) {
      y.push(startYear++);
    }

    return y;
  };

  return (
    <div className="calendar-header">
      <button className="header-action" onClick={() => handleSwitchMonth("prev")}>
        <FaAngleLeft size={16} />
      </button>

      <div className="header-control">
        <CalendarHeaderSelect
          type="month"
          options={months}
          selectedValue={currentMonth}
          handleSelect={handleSelectMonth}
        />

        <CalendarHeaderSelect
          type="year"
          options={years()}
          selectedValue={currentYear}
          handleSelect={handleSelectYear}
        />
      </div>

      <button className="header-action" onClick={() => handleSwitchMonth("next")}>
        <FaAngleRight size={16} />
      </button>
    </div>
  );
};

export default CalendarHeader;
