import React from "react";
import "./SearchBar.css";

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <>
      <form>
        <input
          className="SearchInput"
          type="text"
          value={filterText}
          placeholder="ПОИСК"
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <div className="FreeBooksCheck">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          Свободные книги
        </div>
      </form>
    </>
  );
}

export default SearchBar;
