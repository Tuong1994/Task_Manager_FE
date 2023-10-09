"use client";

import React from "react";
import { SelectOption } from "@/common/type/form";
import { useFormContext } from "react-hook-form";
import SelectControl from "./Control";
import SelectOptions from "./Options";
import FormItemContext from "../Form/Context";
import useLangs from "@/hooks/useLangs";
import useRender from "@/hooks/useRender";
import useClickOutside from "@/hooks/useClickOutside";
import useDetectBottom from "@/hooks/useDetectBottom";

export interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rootClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  rootStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
  sizes?: "sm" | "md" | "lg";
  options?: SelectOption[];
  async?: boolean;
  loading?: boolean;
  total?: number;
  limit?: number;
  prefixes?: React.ReactNode | React.ReactNode[];
  onChangePage?: (page: number) => void;
  onChangeSelect?: (option: SelectOption) => void;
  onSearch?: (search: string) => void;
}

const Select: React.ForwardRefRenderFunction<HTMLInputElement, SelectProps> = (
  {
    rootClassName = "",
    labelClassName = "",
    inputClassName = "",
    rootStyle,
    labelStyle,
    inputStyle,
    label,
    sizes = "md",
    prefixes,
    placeholder,
    options = [],
    async = false,
    loading = false,
    total = 100,
    limit = 10,
    value,
    onChangePage,
    onChangeSelect,
    onSearch,
    ...restProps
  },
  ref
) => {
  const rhfMethods = useFormContext();

  const { isRhf, rhfName, rhfValue, rhfError } = React.useContext(FormItemContext);

  const { langs } = useLangs();

  const totalPages = Math.ceil(total / limit);

  const sizeClassName = `select-${sizes}`;

  const gapClassName = !isRhf ? "select-gap" : "";

  const [open, setOpen] = React.useState<boolean>(false);

  const [selectedItem, setSelectedItem] = React.useState<SelectOption | null>(null);

  const [search, setSearch] = React.useState<string>("");

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const selectRef = React.useRef<HTMLDivElement>(null);

  const render = useRender(open);

  const isBottom = useDetectBottom(selectRef);

  useClickOutside(selectRef, setOpen);

  React.useEffect(() => onChangeSelect?.(selectedItem as SelectOption), [selectedItem]);

  React.useEffect(() => onChangePage?.(currentPage), [currentPage]);

  React.useEffect(() => onSearch?.(search), [search]);

  React.useEffect(() => {
    let defaultOption: SelectOption | null = null;

    if (rhfValue && rhfName) {
      defaultOption = options.find((option) => option.value === rhfValue) as SelectOption;

      rhfMethods.trigger(rhfName);
    } else if (value) {
      defaultOption = options.find((option) => option.value === value) as SelectOption;
    }

    setSelectedItem(defaultOption);
  }, [rhfValue, rhfName, value]);

  const handleOpen = () => setOpen(!open);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    setSelectedItem(null);

    if (!open) setOpen(true);
  };

  const handleChangePage = (type: "prev" | "next") => {
    if (type === "prev") setCurrentPage((prev) => prev - 1);
    else setCurrentPage((prev) => prev + 1);
  };

  const handleSelect = (option: SelectOption) => {
    setSelectedItem(option);

    setSearch("");

    if (isRhf) rhfMethods.setValue(rhfName, option.value);
  };

  const handleClearInput = () => {
    if (selectedItem) setSelectedItem(null);

    if (search) setSearch("");

    if (rhfValue) rhfMethods.resetField(rhfName);
  };

  const renderInputValue = () => {
    if (selectedItem) return selectedItem.label;

    if (search) return search;

    return "";
  };

  const renderOptions = () => {
    if (!search || async) return options;

    return [...options].filter((option) => option.label.toLowerCase().includes(search.toLowerCase()));
  };

  const isClear = () => {
    if (selectedItem) return true;

    if (search) return true;

    return false;
  };

  return (
    <div
      ref={selectRef}
      style={rootStyle}
      className={`select ${gapClassName} ${sizeClassName} ${rootClassName}`}
    >
      {label && (
        <label style={labelStyle} htmlFor="select" className={`select-label ${labelClassName}`}>
          {label}
        </label>
      )}

      <div className="select-wrap">
        <SelectControl
          {...restProps}
          ref={ref}
          open={open}
          langs={langs}
          rhfError={rhfError}
          inputClassName={inputClassName}
          inputStyle={inputStyle}
          placeholder={placeholder}
          prefixes={prefixes}
          isClear={isClear}
          value={renderInputValue()}
          onChange={handleSearch}
          handleOpen={handleOpen}
          handleClearInput={handleClearInput}
        />

        {render && (
          <SelectOptions
            langs={langs}
            open={open}
            async={async}
            loading={loading}
            isBottom={isBottom}
            totalPages={totalPages}
            currentPage={currentPage}
            selectedItem={selectedItem}
            options={renderOptions()}
            handleSelect={handleSelect}
            handleChangePage={handleChangePage}
          />
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(Select);
