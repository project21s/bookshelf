import React from "react";
import style from "./style.module.css";

function Book(props) {
  let book = props.book;
  const noFree = book.isFree ? "" : "На руках";

  const noFreeImage = book.isFree
    ? style.bookImg
    : style.bookImg + " " + style.grayscale;
  return (
    <div onClick={props.onClick ? props.onClick : null}>
      <div className={style.status}>
        <div className={style.bookId}>{book.id}</div>
        <div className={style.isFree}>{noFree}</div>
      </div>
      <div className={style.card}>
        <img className={noFreeImage} alt={book.title} src={book.img} />
        <div className={style.author}>{book.author}</div>
        <div className={style.title}>{book.title}</div>
      </div>
    </div>
  );
}

export default Book;
