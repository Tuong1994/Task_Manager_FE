import React from "react";
import { Columns } from ".";

interface TableExpandProps<M, E> {
  hasSelectRow: boolean;
  columns: Columns<M>;
  expandDataSource?: E[];
  expandColumns?: Columns<E>;
}

const TableExpand = <M extends object, E = unknown>({
  hasSelectRow,
  columns,
  expandDataSource,
  expandColumns,
}: TableExpandProps<M, E>) => {
  return (
    <tr>
      <td colSpan={hasSelectRow ? 2 : 1} className="content-line"></td>

      <td colSpan={columns.length}>
        <div className="wrap-content wrap-content-expand">
          <table>
            <thead>
              <tr className="content-head">
                {expandColumns?.map((column) => (
                  <th key={column.id}>{column.title}</th>
                ))}
              </tr>
            </thead>
            
            <tbody>
              {expandDataSource?.map((data, idx) => (
                <tr key={idx}>
                  {expandColumns?.map((column) => (
                    <td key={column.id}>
                      <div className="content-cell">
                        {column.render
                          ? column.render(data[column.dataIndex], data, idx)
                          : (data[column.dataIndex] as React.ReactNode)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
};

export default TableExpand;
