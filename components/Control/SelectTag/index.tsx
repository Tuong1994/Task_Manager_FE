"use client";

import React from "react";
import { SelectOption } from "@/common/type/form";
import { useFormContext } from "react-hook-form";
import SelectTagControl from "./Control";
import SelectTagOptions from "./Options";
import FormItemContext from "../Form/Context";
import SelectTagList from "./Tags";
import useLangs from "@/hooks/useLangs";
import useRender from "@/hooks/useRender";
import useClickOutside from "@/hooks/useClickOutside";
import useDetectBottom from "@/hooks/useDetectBottom";

export interface SelectTagProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rootClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  rootStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  label?: string;
  sizes?: "sm" | "md" | "lg";
  async?: boolean;
  loading?: boolean;
  disabled?: boolean;
  total?: number;
  limit?: number;
  options?: SelectOption[];
  defaultTags?: SelectOption[];
  prefixes?: React.ReactNode | React.ReactNode[];
  onChangePage?: (page: number) => void;
  onSearch?: (search: string) => void;
}

const SelectTag: React.ForwardRefRenderFunction<HTMLInputElement, SelectTagProps> = (
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
    async = false,
    loading = false,
    disabled,
    total = 100,
    limit = 10,
    options = [],
    defaultTags = [],
    onChangePage,
    onSearch,
    ...restProps
  },
  ref
) => {
  const rhfMethods = useFormContext();

  const { isRhf, rhfName, rhfValue, rhfError, rhfDisabled } = React.useContext(FormItemContext);

  const { langs } = useLangs();

  const controlDisabled = rhfDisabled ? rhfDisabled : disabled;

  const totalPages = Math.ceil(total / limit);

  const sizeClassName = `select-${sizes}`;

  const gapClassName = !isRhf ? "select-gap" : "";

  const [open, setOpen] = React.useState<boolean>(false);

  const [selectedItems, setSelectedItems] = React.useState<SelectOption[]>([]);

  const [search, setSearch] = React.useState<string>("");

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const selectRef = React.useRef<HTMLDivElement>(null);

  const render = useRender(open);

  const isBottom = useDetectBottom(selectRef);

  useClickOutside(selectRef, setOpen);

  React.useEffect(() => onChangePage?.(currentPage), [currentPage]);

  React.useEffect(() => onSearch?.(search), [search]);

  React.useEffect(() => {
    if (rhfValue && Array.isArray(rhfValue)) {
      return setSelectedItems([...rhfValue].map((item) => ({ label: item.name, value: item.id })));
    }

    if (defaultTags.length) return setSelectedItems([...defaultTags]);
  }, [defaultTags.length, rhfValue]);

  React.useEffect(() => {
    if (isRhf) {
      const value = selectedItems.map((item) => ({ id: item.value, name: item.label }));

      rhfMethods.setValue(rhfName, value);
    }
  }, [isRhf, selectedItems.length]);

  const handleOpen = () => setOpen(!open);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    if (!open) setOpen(true);
  };

  const handleChangePage = (type: "prev" | "next") => {
    if (type === "prev") setCurrentPage((prev) => prev - 1);
    else setCurrentPage((prev) => prev + 1);
  };

  const handleSelectOrRemove = (option: SelectOption) => {
    setSearch("");

    const idx = selectedItems.findIndex((item) => item.value === option.value);

    if (idx !== -1)
      return setSelectedItems((prev) => [...prev].filter((item) => item.value !== option.value));

    return setSelectedItems((prev) => [...prev, option]);
  };

  const handleClearInput = () => setSearch("");

  const renderInputValue = () => {
    if (search) return search;

    return "";
  };

  const renderOptions = () => {
    if (!search || async) return options;

    return [...options].filter((option) => option.label.toLowerCase().includes(search.toLowerCase()));
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
        <SelectTagControl
          {...restProps}
          ref={ref}
          open={open}
          langs={langs}
          search={search}
          rhfError={rhfError}
          disabled={controlDisabled}
          inputClassName={inputClassName}
          inputStyle={inputStyle}
          placeholder={placeholder}
          prefixes={prefixes}
          value={renderInputValue()}
          onChange={handleSearch}
          handleOpen={handleOpen}
          handleClearInput={handleClearInput}
        />

        {render && (
          <SelectTagOptions
            langs={langs}
            open={open}
            async={async}
            loading={loading}
            isBottom={isBottom}
            totalPages={totalPages}
            currentPage={currentPage}
            selectedItems={selectedItems}
            options={renderOptions()}
            handleSelectOrRemove={handleSelectOrRemove}
            handleChangePage={handleChangePage}
          />
        )}
      </div>

      <SelectTagList selectedItems={selectedItems} handleSelectOrRemove={handleSelectOrRemove} />
    </div>
  );
};

export default React.forwardRef(SelectTag);
