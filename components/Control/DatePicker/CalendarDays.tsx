import React from "react";

interface CalendarDaysProps {}

const CalendarDays: React.FC<CalendarDaysProps> = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  return (
    <div className="calendar-days">
      {days.map((day, idx) => (
        <div key={idx} className="days-item">
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
