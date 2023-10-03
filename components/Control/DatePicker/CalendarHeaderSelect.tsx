import React from "react";
import { FaAngleDown } from "react-icons/fa";
import useRender from "@/hooks/useRender";
import useClickOutside from "@/hooks/useClickOutside";

interface CalendarHeaderSelectProps {
  type: "month" | "year";
  selectedValue: number;
  options: string[] | number[];
  handleSelect: (option: number) => void;
}

const CalendarHeaderSelect: React.FC<CalendarHeaderSelectProps> = ({
  type,
  options,
  selectedValue,
  handleSelect,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const selectRef = React.useRef<HTMLDivElement>(null);

  const render = useRender(open);

  useClickOutside(selectRef, setOpen);

  const openClassName = open ? "select-options-active" : "";

  const handleOpen = () => setOpen(!open);

  const handleSelectOption = (option: string | number, idx: number) => {
    if (type === "month") return handleSelect(idx);

    return handleSelect(Number(option));
  };

  const renderValue = () => {
    if (type === "month") return options[selectedValue];

    return selectedValue;
  };

  return (
    <div ref={selectRef} className="control-select" onClick={handleOpen}>
      <div className="select-content">
        <span>{renderValue()}</span>
        <FaAngleDown className="content-icon" />
      </div>

      {render && (
        <div className={`select-options ${openClassName}`}>
          {options.map((option, idx) => (
            <div key={idx} className="options-item" onClick={() => handleSelectOption(option, idx)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarHeaderSelect;
