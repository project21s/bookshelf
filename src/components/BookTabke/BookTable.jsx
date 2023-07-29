import React, { useState } from "react";
import Book from "../AppBook/Book";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { useUser } from "../../hooks"

function BookTable({ books, filterText, inStockOnly, favoriteBook, users }) {

  const [who]  = useState(useUser());


  const rows = [];
  let favorites = [];
  let navigate = useNavigate();
    users.forEach((user) => {
      if (user.nickname === who) {
        favorites = user.books.favorite.id;
      }
    })

  books.forEach((book) => {
    let bookSearchString =
      book.title.toLowerCase() +
      " " +
      book.author.toLowerCase() +
      " " +
      book.id;

    if (bookSearchString.indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !book.isFree) {
      return;
    }

    const goBook = (id) => {
      navigate("/book/" + id);
    };

    if (favoriteBook) {
      for (let i = 0; i < favorites.length; i++) {
        if (book.id == favorites[i]) { 
          let isFavorite = true;
          rows.push(
            <Book
              book={book}
              key={book.id}
              isFavorite={isFavorite}
              onClick={() => {
                goBook(book.id);
              }}
            />
          );

        }
      }
    } else {
      let isFavorite = false;
      for (let i = 0; i < favorites.length; i++) {
        if (book.id == favorites[i]) { 
          isFavorite = true;
        }
      }

    rows.push(
      <Book
        book={book}
        key={book.id}
        isFavorite={isFavorite}
        onClick={() => {
          goBook(book.id);
        }}
      />
    );
      }
  });

  return rows.length > 0  ?
    (
    <div className={style.bookTabke} >
      {rows}
    </div>
    ) : 
    (
    <div className={style.noResult}>
      Поиск не дал результатов
    </div>
);
}

export default BookTable;
