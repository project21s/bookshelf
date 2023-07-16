import React from "react";
import style from "./style.module.css";
// import { AppSearch } from "./AppSearch/AppSearch";
import { clsx } from "clsx";
import searchIcon from "../../assets/material-symbols-search.svg";

function AppSearch({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <>
      <form>
        <div className={clsx(style.inputContainer)}>
          <input
            placeholder="Название, автор или номер"
            className={clsx(style.inputContainer)}
            required
            autoComplete="off"
            value={filterText}
            onChange={(e) => onFilterTextChange(e.target.value)}
            onClick={() => {
              window.scrollTo({ top: 300, left: 0 });
            }}
          />
          <img className={style.icon} src={searchIcon} alt="icon" />
        </div>
        {/* <div className={style.FreeBooksCheck}>
          <input 
            type="checkbox"
            name="check"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          <label>Свободные книги</label>
        </div> */}
      </form>
    </>
  );
}

export default AppSearch;
