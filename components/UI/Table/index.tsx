"use client";

import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFilter from "./TableFilter";

export type TableColumn<Record = unknown> = {
  id: string;
  title: React.ReactNode | React.ReactNode[];
  dataIndex: keyof Record;
  render?: (data: any, record: Record, idx: number) => React.ReactNode | React.ReactNode[];
};

export type Columns<Record = unknown> = TableColumn<Record>[];

export interface TableProps<M, E> {
  dataSource: M[];
  columns: Columns<M>;
  expandDataSource?: E[];
  expandColumns?: Columns<E>;
  rowKey?: keyof M;
  disabledRowKeys?: React.Key[];
  hasFilter?: boolean;
  hasExpand?: boolean;
  hasSelectRow?: boolean;
  filter?: React.ReactNode | React.ReactNode[];
  onSelectRow?: (keys: React.Key[]) => void;
}

const Table = <M extends object, E = unknown>(
  {
    dataSource,
    columns,
    expandDataSource,
    expandColumns,
    rowKey,
    disabledRowKeys = [],
    hasFilter,
    hasExpand = false,
    hasSelectRow = false,
    filter,
    onSelectRow,
  }: TableProps<M, E>,
  ref: React.ForwardedRef<HTMLTableElement>
) => {
  const [rowSelectedKeys, setRowSelectedKeys] = React.useState<React.Key[]>([]);

  React.useEffect(() => {
    if (!hasSelectRow) return;

    onSelectRow?.(rowSelectedKeys);
  }, [rowSelectedKeys.length]);

  const data = React.useMemo(
    () => dataSource.filter((data) => !disabledRowKeys.includes(data[rowKey ? rowKey : ("id" as keyof M)])),
    [disabledRowKeys.length, dataSource.length]
  );

  const handleSelectRow = (key: React.Key) => {
    const idx = rowSelectedKeys.indexOf(key);

    if (idx !== -1) return setRowSelectedKeys((prev) => [...prev].filter((k) => k !== key));

    setRowSelectedKeys((prev) => [...prev, key]);
  };

  const handleSelectAllRow = () => {
    if (rowSelectedKeys.length && rowSelectedKeys.length === data.length) return setRowSelectedKeys([]);

    setRowSelectedKeys([...data].map((data, idx) => (rowKey ? data[rowKey] : `col-${idx}`)));
  };

  const renderTableHeadCheckbox = React.useCallback(() => {
    if (rowSelectedKeys.length && rowSelectedKeys.length < data.length)
      return <div className="cell-checkbox cell-checkbox-mixed" onClick={handleSelectAllRow} />;

    return (
      <input
        checked={rowSelectedKeys.length === data.length}
        type="checkbox"
        className="cell-checkbox"
        onChange={handleSelectAllRow}
      />
    );
  }, [rowSelectedKeys.length, data.length]);

  return (
    <div className="table-wrap">
      {hasFilter && <TableFilter filter={filter} />}

      <div className={`wrap-content ${!hasFilter ? "wrap-content-radius" : ""}`}>
        <table ref={ref}>
          <TableHead<M>
            columns={columns}
            hasExpand={hasExpand}
            hasSelectRow={hasSelectRow}
            renderTableHeadCheckbox={renderTableHeadCheckbox}
          />

          <TableBody<M, E>
            dataSource={dataSource}
            columns={columns}
            expandDataSource={expandDataSource}
            expandColumns={expandColumns}
            rowKey={rowKey}
            disabledRowKeys={disabledRowKeys}
            hasExpand={hasExpand}
            hasSelectRow={hasSelectRow}
            rowSelectedKeys={rowSelectedKeys}
            handleSelectRow={handleSelectRow}
          />
        </table>
      </div>
    </div>
  );
};

export default React.forwardRef(Table);
