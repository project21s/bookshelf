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
      <form className={style.fixed}>
        <div className={clsx(style.inputContainer)}>
        <input
          type="text"
          placeholder="Поиск"
          className={clsx(style.inputContainer)}
          required
          autoComplete="off"
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)
          }
        />
        <img className={style.icon} src={searchIcon} alt="icon"/>
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
