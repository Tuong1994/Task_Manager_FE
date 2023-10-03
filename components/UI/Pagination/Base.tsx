import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationBaseProps {
  showContent: boolean;
  leftBtnDisabled: () => boolean;
  rightBtnDisabled: () => boolean;
  renderContent: () => string;
  renderPageButtons: () => React.ReactNode[];
  handleChangePage: (type: "first" | "prev" | "next" | "last" | "page", page?: number) => void;
}

const PaginationBase: React.ForwardRefRenderFunction<HTMLDivElement, PaginationBaseProps> = ({
  showContent,
  leftBtnDisabled,
  rightBtnDisabled,
  renderContent,
  renderPageButtons,
  handleChangePage,
}, ref) => {
  const buttonClassName = (type: "left" | "right") => {
    if (type === "left")
      return `actions-btn actions-btn-icon ${leftBtnDisabled() ? "actions-btn-disabled" : ""}`;

    return `actions-btn actions-btn-icon ${rightBtnDisabled() ? "actions-btn-disabled" : ""}`;
  };

  return (
    <div ref={ref} className={`pagination ${showContent ? "pagination-justify" : ""}`}>
      {showContent && <div className="pagination-content">{renderContent()}</div>}

      <div className="pagination-actions">
        <button
          disabled={leftBtnDisabled()}
          className={buttonClassName("left")}
          onClick={() => handleChangePage("first")}
        >
          <FaAngleDoubleLeft size={16} />
        </button>

        <button
          disabled={leftBtnDisabled()}
          className={buttonClassName("left")}
          onClick={() => handleChangePage("prev")}
        >
          <FaAngleLeft size={16} />
        </button>

        {renderPageButtons()}

        <button className={buttonClassName("right")} onClick={() => handleChangePage("next")}>
          <FaAngleRight size={16} />
        </button>

        <button className={buttonClassName("right")} onClick={() => handleChangePage("last")}>
          <FaAngleDoubleRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default React.forwardRef(PaginationBase);
