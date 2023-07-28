import React, { useState} from "react";

import style from "./style.module.css";
import { books, users } from "../../services/bookMockAPI";

import BookTable from "../../components/BookTabke/BookTable";
// import AppSearch from "../../components/AppSearch/AppSearch";
import AppScrollToUp from "../../components/AppScrollToUp/AppScrollToUp"


function MyBooks() {

  const [filterText] = useState("");
  const [inStockOnly] = useState(false);
  const [favoriteBook] = useState(true);
  const [addBook] = useState(false);
  const [user] = 'stironni';

  const rows = [];

  books.forEach((book) => { 
  
  }
  );


  return (
    <div className={style.main}>
      <AppScrollToUp />
      <BookTable
        books={books}
        filterText={filterText}
        inStockOnly={inStockOnly}
        user={user}
        favoriteBook={favoriteBook}
        addBook={addBook}
        users={users}
      />
    </div>
  );
}

export default MyBooks;
