import React, { useState, useEffect, useContext } from "react";

import style from "./style.module.css";
// import { books } from "../../services/bookMockAPI";

import BookTable from "../../components/BookTabke/BookTable";
// import AppSearch from "../../components/AppSearch/AppSearch";
import AppScrollToUp from "../../components/AppScrollToUp/AppScrollToUp";
// import { useUser } from "../../hooks";
import { userStatus, logOut } from "../../services/authApiServes";

import { getAllBook } from "../../services/bookApiServes";

import { UserContext } from "../../contexts/UserContext";

function MyBooks() {
  let [books, setBooks] = useState(null);
  const { user, userDispatch } = useContext(UserContext);

  let getBooks = async () => {
    let booksTmp = await getAllBook();
    setBooks(booksTmp);
    console.log(booksTmp);
  };

  useEffect(() => {
    if (!books) {
      getBooks();
    }
  }, [user, books]);

  // console.log(user.nickname);

  const [filterText] = useState("");
  const [inStockOnly] = useState(false);
  const [favoriteBook] = useState(true);
  //   const [user]  = useState(useUser());

  return (
    <div className={style.main}>
      <AppScrollToUp />
      {!user && (
        <div className={style.favorites}>
          Войдите, чтобы иметь доступ к списку избранного
        </div>
      )}
      {user && <div className={style.favorites}>Хочу прочесть!</div>}
      {user && books && (
        <BookTable
          user={user}
          books={books}
          filterText={filterText}
          inStockOnly={inStockOnly}
          favoriteBook={[favoriteBook]}
          page="mybook"
        />
      )}
    </div>
  );
}

export default MyBooks;
