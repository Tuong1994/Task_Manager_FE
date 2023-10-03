import React from "react";
import { SelectOption } from "@/common/interface/form";
import { FaTimesCircle } from "react-icons/fa";

interface SelectTagListProps {
  selectedItems: SelectOption[];
  handleSelectOrRemove: (option: SelectOption) => void;
}

const SelectTagList: React.FC<SelectTagListProps> = ({ selectedItems, handleSelectOrRemove }) => {
  return (
    <div className="select-tags">
      {selectedItems.map((tag) => (
        <div key={tag.value} className="tags-item">
          <span className="item-label">{tag.label}</span>
          <FaTimesCircle size={10} className="item-icon" onClick={() => handleSelectOrRemove(tag)} />
        </div>
      ))}
    </div>
  );
};

export default SelectTagList;
