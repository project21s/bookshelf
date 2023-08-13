import React, { useState, useEffect } from "react";

import style from "./style.module.css";
// import { books } from "../../services/bookMockAPI";

import BookTable from "../../components/BookTabke/BookTable";
// import AppSearch from "../../components/AppSearch/AppSearch";
import AppScrollToUp from "../../components/AppScrollToUp/AppScrollToUp"
// import { useUser } from "../../hooks";
import { userStatus, logOut } from "../../services/authApiServes";

import { getAllBook } from "../../services/bookApiServes";

function MyBooks() {

    // console.log("hi");

    let [books, setBooks] = useState(null);


    let getBooks = async () => {
      let booksTmp = await getAllBook()
      setBooks(booksTmp);
      console.log(booksTmp)
  
    };
  
    useEffect(() => {
      if (!books) {
        getBooks()
      }
    }, [books]);


    // let [openLogin, setOpenLogin] = useState(false);

    let [user, setUser] = useState(null);

    let status = async () => {
      let userData = await userStatus()
      if (!user) {
        setUser(userData)
      } else if (userData.id !== user.id) {
        setUser(userData)
      }
    }

    useEffect(() => {
        status()
      }, [user])

      // console.log(user.nickname);

  const [filterText] = useState("");
  const [inStockOnly] = useState(false);
//   const [favoriteBook] = useState(true);
//   const [user]  = useState(useUser());


  return (
    <div className={style.main}>
      <AppScrollToUp />
      <div className={style.favorites}>
        Хочу прочесть!
      </div>
      {books && <BookTable
        books={books}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />}
    </div>
  );
}

export default MyBooks;