import React from "react";
import { Columns } from ".";

interface TableHeadProps<M> {
  columns: Columns<M>;
  hasExpand: boolean;
  hasSelectRow: boolean;
  renderTableHeadCheckbox: () => React.ReactNode;
}

const TableHead = <M extends object>({
  columns,
  hasExpand,
  hasSelectRow,
  renderTableHeadCheckbox,
}: TableHeadProps<M>) => {
  return (
    <thead>
      <tr className="content-head">
        {hasSelectRow && (
          <th>
            <div className="content-cell">{renderTableHeadCheckbox()}</div>
          </th>
        )}

        {hasExpand && <th></th>}

        {columns.map((column) => (
          <th key={column.id}>{column.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
