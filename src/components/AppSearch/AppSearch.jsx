import React from "react";
import style from "./style.module.css";
import { clsx } from "clsx";
import searchIcon from "../../assets/material-symbols-search.svg";
import { useScreen} from "../../hooks";

function AppSearch({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {

  const { isMobile }  = useScreen();

  const goToTop = () => {
   
    if (isMobile) {
      window.scrollTo ({top: 292 , behavior: "smooth",});
    } else {
      window.scrollTo ({top: 0, behavior: "smooth",});
    }
  };

  return (
    <>
        <div className={clsx(style.inputContainer)}>
          <input
            type="search"
            placeholder="Название, автор или номер"
            className={clsx(style.inputContainer)}
            required
            autoComplete="off"
            value={filterText}
            onChange={(e) => onFilterTextChange(e.target.value)}
            onClick={goToTop}
            onInput={goToTop}
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
    </>
  );
}

export default AppSearch;
