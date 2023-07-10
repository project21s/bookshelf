import React from "react";
import style from "./style.module.css";
import Checkbox from "../AppFavoriteCheck/AppFavoriteCheck"

function Book(props) {
  let book = props.book;

  const bookId = book.isFree ? 
  [style.bookId, style.bookIdFree].join(" ") : 
  [style.bookId, style.bookIdNoFree].join(" ");

  const StatusFree = book.isFree ? [style.StatusFree, style.StatusNoFree].join(" ") : style.StatusFree;

  // пока как заглушка по четному id книги
  const isFavorite = (book.id % 2 === 0) ? true : false;

  const noFreeImage = book.isFree
    ? style.bookImg
    : style.bookImg + " " + style.grayscale;

  return (
      <div className={style.card}>
        <div className={bookId} onClick={props.onClick ? props.onClick : null}>{book.id}</div>
        <div className={style.divImage} onClick={props.onClick ? props.onClick : null}>
          <img className={noFreeImage} alt={book.title} src={book.img} />
        </div>
        <div className={style.author} onClick={props.onClick ? props.onClick : null}>{book.author}</div>
        <div className={style.title} onClick={props.onClick ? props.onClick : null}>{book.title}</div>
        <div className={style.freeFavorite}>
          <div className={StatusFree} onClick={props.onClick ? props.onClick : null}>Читают</div>
        <Checkbox checked={isFavorite} />
        </div>
      </div>
  );
}

export default Book;
