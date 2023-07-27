import React, { useState} from "react";

import style from "./style.module.css";
import { books } from "../../services/bookMockAPI";

import BookTable from "../../components/BookTabke/BookTable";
// import AppSearch from "../../components/AppSearch/AppSearch";
import AppScrollToUp from "../../components/AppScrollToUp/AppScrollToUp"


function MyBooks() {

  const [filterText] = useState("");
  const [inStockOnly] = useState(false);
  const [favoriteBook] = useState(true);
  const [addBook] = useState(true);
  const [user] = 'stironni';


  return (
    <div className={style.main}>
      <AppScrollToUp />
      <BookTable
        books={books}
        filterText={filterText}
        inStockOnly={inStockOnly}
        users={user}
        favoriteBook={favoriteBook}
        addBook={addBook}
      />
    </div>
  );
}

export default MyBooks;
