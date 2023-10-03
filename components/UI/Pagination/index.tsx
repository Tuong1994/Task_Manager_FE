import React from "react";
import PaginationBase from "./Base";
import PaginationSimple from "./Simple";
import useLangs from "@/hooks/useLangs";
import useViewpoint from "@/hooks/useViewpoint";
import usePagination from "./usePagination";

export interface PaginationProps {
  total?: number;
  limit?: number;
  siblingCount?: number;
  simple?: boolean;
  showContent?: boolean;
  onChange?: (page: number) => void;
}

const Pagination: React.ForwardRefRenderFunction<HTMLDivElement, PaginationProps> = (
  { total = 100, limit = 10, siblingCount = 1, simple, showContent = false, onChange },
  ref
) => {
  const { langs } = useLangs();

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { paginationRange, totalPages, DOTS } = usePagination({
    total,
    limit,
    siblingCount,
    currentPage,
  });

  React.useEffect(() => onChange?.(currentPage), [currentPage]);

  const { isPhone } = useViewpoint();

  const handleChangePage = (type: "first" | "prev" | "next" | "last" | "page", page?: number) => {
    switch (type) {
      case "first": {
        setCurrentPage(1);
        break;
      }
      case "prev": {
        setCurrentPage((prev) => prev - 1);
        break;
      }
      case "next": {
        setCurrentPage((prev) => prev + 1);
        break;
      }
      case "last": {
        setCurrentPage(totalPages);
        break;
      }
      default:
        return setCurrentPage(page ?? 1);
    }
  };

  const renderPageButtons = () => {
    return paginationRange.map((page, idx) => {
      if (page === DOTS)
        return (
          <div key={idx} className="actions-dot">
            {page}
          </div>
        );
      return (
        <button
          key={idx}
          className={`actions-btn ${currentPage === page ? "actions-btn-active" : ""}`}
          onClick={() => handleChangePage("page", Number(page))}
        >
          {page}
        </button>
      );
    });
  };

  const renderContent = () => {
    if (!langs) return "";

    const start = (currentPage - 1) * limit;

    const end = start + limit;

    const from = start === 0 ? 1 : start;

    const to = end === total ? total : end;

    const { showing, of, result } = langs.common.components.pagination;

    return `${showing} ${from}-${to} ${of} ${total} ${result}`;
  };

  const leftBtnDisabled = () => {
    if (currentPage === 1) return true;
    return false;
  };

  const rightBtnDisabled = () => {
    if (currentPage === totalPages) return true;
    return false;
  };

  if (simple || isPhone) {
    return (
      <PaginationSimple
        ref={ref}
        currentPage={currentPage}
        totalPages={totalPages}
        leftBtnDisabled={leftBtnDisabled}
        rightBtnDisabled={rightBtnDisabled}
        handleChangePage={handleChangePage}
      />
    );
  }

  return (
    <PaginationBase
      ref={ref}
      showContent={showContent}
      leftBtnDisabled={leftBtnDisabled}
      rightBtnDisabled={rightBtnDisabled}
      renderContent={renderContent}
      renderPageButtons={renderPageButtons}
      handleChangePage={handleChangePage}
    />
  );
};

export default React.forwardRef(Pagination);
