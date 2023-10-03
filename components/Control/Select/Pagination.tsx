import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface SelectPaginationProps {
  currentPage: number;
  totalPages: number;
  handleChangePage: (type: "prev" | "next") => void;
}

const SelectPagination: React.FC<SelectPaginationProps> = ({
  currentPage,
  totalPages,
  handleChangePage,
}) => {
  const isPrevBtnDisabled = currentPage === 1;

  const isNextBtnDisabled = currentPage === totalPages;

  const prevBtnDisabledClassName = currentPage === 1 ? "pagination-action-disabled" : "";

  const nextBtnDisabledClassName = currentPage === totalPages ? "pagination-action-disabled" : "";

  return (
    <div className="options-pagination">
      <div className="pagination-content">
        {currentPage} / {totalPages}
      </div>

      <button
        disabled={isPrevBtnDisabled}
        className={`pagination-action ${prevBtnDisabledClassName}`}
        onClick={() => handleChangePage("prev")}
      >
        <FaAngleLeft />
      </button>

      <button
        disabled={isNextBtnDisabled}
        className={`pagination-action ${nextBtnDisabledClassName}`}
        onClick={() => handleChangePage("next")}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default SelectPagination;
