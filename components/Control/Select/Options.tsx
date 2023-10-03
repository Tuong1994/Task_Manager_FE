import React from "react";
import { SelectOption } from "@/common/interface/form";
import { FaCheck } from "react-icons/fa";
import { Langs } from "@/common/interface/lang";
import Spin from "@/components/UI/Spin";
import SelectPagination from "./Pagination";

interface SelectOptionsProps {
  langs: Langs;
  open: boolean;
  async: boolean;
  loading: boolean;
  isBottom: boolean;
  totalPages: number;
  currentPage: number;
  options: SelectOption[];
  selectedItem: SelectOption | null;
  handleSelect: (option: SelectOption) => void;
  handleChangePage: (type: "prev" | "next") => void;
}

const SelectOptions: React.FC<SelectOptionsProps> = ({
  langs,
  open,
  loading,
  async,
  isBottom,
  totalPages,
  currentPage,
  options,
  selectedItem,
  handleSelect,
  handleChangePage,
}) => {
  const openClassName = open ? "wrap-options-active" : "";

  const bottomClassName = isBottom ? "wrap-options-bottom" : "";

  const optionsScrollClassName = options.length >= 10 ? "options-group-scroll" : "";

  const renderOptionItem = () => {
    return options.map((option, idx) => {
      const isSelected = selectedItem?.value === option.value;

      return (
        <div
          key={idx}
          className={`group-item ${isSelected ? "group-item-selected" : ""}`}
          onClick={() => handleSelect(option)}
        >
          <span>{option.label}</span>
          {isSelected && <FaCheck size={12} />}
        </div>
      );
    });
  };

  return (
    <div className={`wrap-options ${openClassName} ${bottomClassName}`}>
      {!loading ? (
        options.length ? (
          <React.Fragment>
            <div className={`options-group ${optionsScrollClassName}`}>{renderOptionItem()}</div>

            {async && totalPages > 1 && (
              <SelectPagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
              />
            )}
          </React.Fragment>
        ) : (
          <div className="options-empty">{langs?.options.empty}</div>
        )
      ) : (
        <div className="options-loading">
          <Spin />
        </div>
      )}
    </div>
  );
};

export default SelectOptions;
