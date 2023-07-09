import React from "react";
import style from "./style.module.css";
import  favoriteActive  from "../../assets/baseline-star.svg"
import  favoriteNoActive from "../../assets/baseline-star-border.svg"

function Book(props) {
  let book = props.book;

  const bookId = book.isFree ? [style.bookId, style.bookIdFree].join(" ") : [style.bookId, style.bookIdNoFree].join(" ");

  const StatusFree = book.isFree ? style.isFree : style.noFree;

  const Favorite = (book.id % 2 === 0) ? favoriteActive : favoriteNoActive;

  const noFreeImage = book.isFree
    ? style.bookImg
    : style.bookImg + " " + style.grayscale;
  return (
    <div onClick={props.onClick ? props.onClick : null}>
      <div className={style.card}>
        <div className={bookId}>{book.id}</div>
        <div className={style.divImage}>
          <img className={noFreeImage} alt={book.title} src={book.img} />
        </div>
        <div className={style.author}>{book.author}</div>
        <div className={style.title}>{book.title}</div>
        <div className={style.freeFavorite}>
          <div className={StatusFree}>Читают</div>
          <img className={style.favorite} alt="" src={Favorite} />
        </div>
      </div>
    </div>
  );
}

export default Book;
