import React from "react";
import Book from "./AppBook/Book";

function BookTable({ books, filterText, inStockOnly }) {
  const rows = [];

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
    rows.push(<Book book={book} key={book.id} />);
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {rows}
    </div>
  );
}

export default BookTable;
