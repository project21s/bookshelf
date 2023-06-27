import React from "react";
import { useState } from "react";

import style from "./style.module.css";
import { AppButton } from "../../components/AppButton/AppButton";
import { Player } from "@lottiefiles/react-lottie-player";
import spaceman from "../../assets/spaceman.json";
import { books } from "../../services/bookMockAPI";

import BookTable from "../../components/BookTable";
import SearchBar from "../../components/SearchBar";

function Home() {
  useState();
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <div className={style.main}>
        <div className={style.addbook}>
          <AppButton size="s" header="Добавить книгу" />
        </div>
        <div className={style.header}>
          <Player autoplay loop src={spaceman}></Player>
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

      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
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
