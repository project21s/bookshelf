import React, { useState} from "react";

import style from "./style.module.css";
import { books, users } from "../../services/bookMockAPI";

import BookTable from "../../components/BookTabke/BookTable";
import AppSearch from "../../components/AppSearch/AppSearch";
import AppScrollToUp from "../../components/AppScrollToUp/AppScrollToUp"

function Home() {

  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [favoriteBook] = useState(false);
  const [user] = useState("stironni");


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
      <div className={style.marginBookTable}>
        <BookTable
          books={books}
          filterText={filterText}
          inStockOnly={inStockOnly}
          who={user}
          favoriteBook={favoriteBook}
          users={users}
      />
      </div>
    </div>
  );
}

export default Home;
