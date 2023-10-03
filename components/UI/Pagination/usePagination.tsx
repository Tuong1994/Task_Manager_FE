import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";

interface PaginationParams {
  total: number;
  limit: number;
  currentPage: number;
  siblingCount: number;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

const DOTS = <BiDotsHorizontal size={20} />;

const usePagination = (args: PaginationParams) => {
  const { total, limit, siblingCount, currentPage } = args;

  const totalPages = Math.ceil(total / limit);

  const totalPageNumbers = siblingCount + 5;

  const paginationRange = React.useMemo(() => {
    if (totalPages < totalPageNumbers) return range(1, totalPages);

    const leftSiblingIdx = Math.max(currentPage - siblingCount, 1);

    const rightSiblingIdx = Math.min(currentPage + siblingCount, totalPages);

    const isShowLeftDots = leftSiblingIdx > 2;

    const isShowRightDots = rightSiblingIdx < totalPages - 2;

    const firstPageIdx = 1;

    const lastPageIdx = totalPages;

    if (!isShowLeftDots && isShowRightDots) {
      const leftItems = 3 + 2 * siblingCount;

      const leftRange = range(1, leftItems);

      return [...leftRange, DOTS, lastPageIdx];
    }

    if (isShowLeftDots && !isShowRightDots) {
      const rightItems = 3 + 2 * siblingCount;

      const rightRange = range(totalPages - rightItems + 1, totalPages);

      return [firstPageIdx, DOTS, ...rightRange];
    }

    if (isShowLeftDots && isShowRightDots) {
      const middleRange = range(leftSiblingIdx, rightSiblingIdx);

      return [firstPageIdx, DOTS, ...middleRange, DOTS, lastPageIdx];
    }

    return [];
  }, [total, limit, siblingCount, currentPage]);

  return { paginationRange, totalPages, DOTS };
};

export default usePagination;
