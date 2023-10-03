import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationSimpleProps {
  currentPage: number;
  totalPages: number;
  leftBtnDisabled: () => boolean;
  rightBtnDisabled: () => boolean;
  handleChangePage: (type: "first" | "prev" | "next" | "last" | "page", page?: number) => void;
}

const PaginationSimple: React.ForwardRefRenderFunction<HTMLDivElement, PaginationSimpleProps> = (
  { currentPage, totalPages, leftBtnDisabled, rightBtnDisabled, handleChangePage },
  ref
) => {
  const buttonClassName = (type: "left" | "right") => {
    if (type === "left") return `wrap-action ${leftBtnDisabled() ? "actions-btn-disabled" : ""}`;

    return `wrap-action ${rightBtnDisabled() ? "actions-btn-disabled" : ""}`;
  };

  return (
    <div ref={ref} className="pagination-simple">
      <div className="simple-wrap">
        <button className={buttonClassName("left")} onClick={() => handleChangePage("first")}>
          <FaAngleDoubleLeft />
        </button>

        <button className={buttonClassName("left")} onClick={() => handleChangePage("prev")}>
          <FaAngleLeft />
        </button>

        <div className="wrap-content">
          {currentPage} / {totalPages}
        </div>

        <button className={buttonClassName("right")} onClick={() => handleChangePage("next")}>
          <FaAngleDoubleRight />
        </button>

        <button className={buttonClassName("right")} onClick={() => handleChangePage("last")}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default React.forwardRef(PaginationSimple);
