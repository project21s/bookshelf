import React from "react";
import Book from "../AppBook/Book";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css"

function BookTable({ books, filterText, inStockOnly }) {

  const rows = [];
  let navigate = useNavigate();

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

    rows.push(
      <Book
        book={book}
        key={book.id}
        onClick={() => {
          goBook(book.id);
        }}
      />
    );
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
