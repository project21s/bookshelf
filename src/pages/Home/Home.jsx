import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./style.module.css";
import { AppButton } from "../../components/AppButton/AppButton";
import { Player } from "@lottiefiles/react-lottie-player";
import spaceman from "../../assets/spaceman.json";
import { books } from "../../services/bookMockAPI";

import BookTable from "../../components/BookTable";
import SearchBar from "../../components/SearchBar";
// import logo from "../../assets/logo.svg";

function Home() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  let navigate = useNavigate();

  const goAddBook = () => {
    navigate("/addbook");
  };

  return (
    <div>
      <div className={style.main}>
        <div className={style.addbook}>
        {/* <img src="../../assets/logo.svg"  alt="За стеклом" width="300px" height="200px" /> */}
          <AppButton size="s" header="Добавить книгу" onClick={goAddBook} />
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
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
      </div>

      <div>
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
