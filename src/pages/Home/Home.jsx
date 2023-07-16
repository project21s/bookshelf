import React from "react";
import { useState, useRef } from "react";

import style from "./style.module.css";
import { books } from "../../services/bookMockAPI";

import BookTable from "../../components/BookTabke/BookTable";
import AppSearch from "../../components/AppSearch/AppSearch";
import AppButton from "../../components/AppButton/AppButton";

function Home() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", position: "fixed" });
  };

  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div ref={ref} className={style.main}>
      <div ref={ref} className={style.blockLeft}>
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
      </div>
      <div className={style.search}>
        <AppSearch
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
      </div>
      <AppButton scrollUp onClick={handleClick} />
      <BookTable
        books={books}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default Home;
