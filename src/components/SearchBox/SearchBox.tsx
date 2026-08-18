import React from "react";
import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value?: string;
  onChange: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search notes..."
      onChange={(e) => onChange(e.target.value)}
      className={css.searchInput}
    />
  );
};

export default SearchBox;
