import React from "react";
import { SelectOption } from "@/common/type/form";
import { FaCheck } from "react-icons/fa";
import { Langs } from "@/common/type/lang";
import Spin from "@/components/UI/Spin";
import SelectTagPagination from "./Pagination";

interface SelectTagOptionsProps {
  langs: Langs;
  open: boolean;
  async: boolean;
  loading: boolean;
  isBottom: boolean;
  totalPages: number;
  currentPage: number;
  options: SelectOption[];
  selectedItems: SelectOption[];
  handleSelectOrRemove: (option: SelectOption) => void;
  handleChangePage: (type: "prev" | "next") => void;
}

const SelectTagOptions: React.FC<SelectTagOptionsProps> = ({
  langs,
  open,
  loading,
  async,
  isBottom,
  totalPages,
  currentPage,
  options,
  selectedItems,
  handleSelectOrRemove,
  handleChangePage,
}) => {
  const openClassName = open ? "wrap-options-active" : "";

  const bottomClassName = isBottom ? "wrap-options-bottom" : "";

  const optionsScrollClassName = options.length >= 10 ? "options-group-scroll" : "";

  const renderOptionItem = () => {
    return options.map((option, idx) => {
      const isSelected = selectedItems.findIndex((item) => item.value === option.value) > -1;

      return (
        <div
          key={idx}
          className={`group-item ${isSelected ? "group-item-selected" : ""}`}
          onClick={() => handleSelectOrRemove(option)}
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
              <SelectTagPagination
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

export default SelectTagOptions;
