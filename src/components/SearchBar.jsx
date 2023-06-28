import React from "react";
import "./SearchBar.css";
import { AppInput } from "./AppInput/AppInput";

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <>
      <form>
        <AppInput
          placeholder="Поиск"
          onChange={(e) => onFilterTextChange(e.target.value)}
          value={filterText}
        ></AppInput>
        <div className="FreeBooksCheck">
          <input
            type="checkbox"
            name="check"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          <label>Свободные книги</label>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
