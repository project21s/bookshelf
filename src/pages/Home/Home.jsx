import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";

import style from "./style.module.css";

import BookTable from "../../components/BookTabke/BookTable";
import AppSearch from "../../components/AppSearch/AppSearch";
import AppScrollToUp from "../../components/AppScrollToUp/AppScrollToUp";

import { getAllBook } from "../../services/bookApiServes";

import { getAllBook } from "../../services/bookApiServes";

function Home() {
  let [books, setBooks] = useState(null);

  let getBooks = async () => {
    let booksTmp = await getAllBook();
    setBooks(booksTmp);
    console.log(booksTmp);
  };

  useEffect(() => {
    if (!books) {
      getBooks();
    }
  }, [books]);

  let [books, setBooks] = useState(null);

  let getBooks = async () => {
    let booksTmp = await getAllBook();
    setBooks(booksTmp);
    console.log(booksTmp);
  };

  useEffect(() => {
    if (!books) {
      getBooks();
    }
  }, [books]);

  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className={style.main}>
      <div className={style.blockLeft}>
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
      <AppScrollToUp />
      {books && (
        <BookTable
          books={books}
          filterText={filterText}
          inStockOnly={inStockOnly}
          page="home"
        />
      )}
    </div>
  );
}

export default Home;
