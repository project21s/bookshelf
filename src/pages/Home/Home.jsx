import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import style from "./style.module.css";
import { books } from "../../services/bookMockAPI";

import BookTable from "../../components/BookTable";
import SearchBar from "../../components/SearchBar";
function Home() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const isMobile = true;

  const main = (isMobile) ? style.mobile : style.dekstop;

  // let navigate = useNavigate();

  return (
    <div className={main}>
      <div className={style.blockLeft} id="one">
        <div className={style.hello}>
          <span>Рады видеть тебя в нашей школьной библиотеке</span>
        </div>
        <div className={style.info}>
          <div>
              Найди интересную тебе книгу, если она сейчас свободна - выбери ее в
              списке и укажи свой ник
            </div>
            <br />
            <div>- Брать книгу на одну неделю, не больше</div>
            <div>- Книги просим возвращать в свою ячейку согласно её номеру</div>
        </div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
      </div>
      <div className={style.bookTable}>
      <BookTable 
          books={books}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>        
      
    </div>
  );
}

export default Home;
