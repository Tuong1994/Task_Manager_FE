import React from "react";
import { Columns } from ".";
import { FaPlus, FaMinus } from "react-icons/fa";
import TableExpand from "./TableExpand";

interface TableBodyProps<M, E> {
  dataSource: M[];
  columns: Columns<M>;
  expandDataSource?: E[];
  expandColumns?: Columns<E>;
  rowKey?: keyof M;
  disabledRowKeys: React.Key[];
  rowSelectedKeys: React.Key[];
  hasExpand: boolean;
  hasSelectRow: boolean;
  handleSelectRow: (key: React.Key) => void;
}

const TableBody = <M extends object, E = unknown>({
  dataSource,
  columns,
  expandDataSource,
  expandColumns,
  rowKey,
  disabledRowKeys,
  rowSelectedKeys,
  hasExpand,
  hasSelectRow,
  handleSelectRow,
}: TableBodyProps<M, E>) => {
  const [expandIdx, setExpandIdx] = React.useState<string>("");

  return (
    <tbody>
      {dataSource.map((data, idx) => {
        const key = rowKey ? data[rowKey] : `col-${idx}`;

        const isSelected = rowSelectedKeys.includes(key);

        const isDisabled = disabledRowKeys.includes(key);

        const isExpand = expandIdx === key;

        return (
          <React.Fragment key={key}>
            <tr className={`${isSelected ? "content-selected" : ""}`}>
              {hasSelectRow && (
                <td>
                  <div className="content-cell">
                    <input
                      type="checkbox"
                      className="cell-checkbox"
                      disabled={isDisabled}
                      checked={isSelected}
                      onChange={() => handleSelectRow(key)}
                    />
                  </div>
                </td>
              )}

              {hasExpand && (
                <td>
                  <div className="content-cell">
                    {!isExpand ? (
                      <FaPlus className="cell-expand-icon" onClick={() => setExpandIdx(key)} />
                    ) : (
                      <FaMinus className="cell-expand-icon" onClick={() => setExpandIdx("")} />
                    )}
                  </div>
                </td>
              )}

              {columns.map((column) => (
                <td key={column.id}>
                  <div className="content-cell">
                    {column.render
                      ? column.render(data[column.dataIndex], data, idx)
                      : (data[column.dataIndex] as React.ReactNode)}
                  </div>
                </td>
              ))}
            </tr>

            {hasExpand && isExpand && (
              <TableExpand<M, E>
                hasSelectRow={hasSelectRow}
                columns={columns}
                expandDataSource={expandDataSource}
                expandColumns={expandColumns}
              />
            )}
          </React.Fragment>
        );
      })}
    </tbody>
  );
};

export default TableBody;
