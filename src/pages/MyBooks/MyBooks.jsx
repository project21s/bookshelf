import React, { useState} from "react";

import style from "./style.module.css";
import { books, users } from "../../services/bookMockAPI";

import BookTable from "../../components/BookTabke/BookTable";
// import AppSearch from "../../components/AppSearch/AppSearch";
import AppScrollToUp from "../../components/AppScrollToUp/AppScrollToUp"
import { useUser } from "../../hooks";



function MyBooks() {

  const [filterText] = useState("");
  const [inStockOnly] = useState(false);
  const [favoriteBook] = useState(true);
  const [user]  = useState(useUser());


  return (
    <div className={style.main}>
      <AppScrollToUp />
      <div className={style.favorites}>
        Хочу прочесть
      </div>
      <BookTable
        books={books}
        filterText={filterText}
        inStockOnly={inStockOnly}
        who={user}
        favoriteBook={favoriteBook}
        users={users}
      />
    </div>
  );
}

export default MyBooks;
