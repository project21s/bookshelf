import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import Checkbox from "../AppFavoriteCheck/AppFavoriteCheck";
import { userStatus } from "../../services/authApiServes";
import { async } from "@firebase/util";

function Book(props) {
  let book = props.book;

  const bookId = (book.status === "free") ?
    [style.bookId, style.bookIdFree].join(" ") :
    [style.bookId, style.bookIdNoFree].join(" ");

  const StatusFree = (book.status === "free") ?
    [style.StatusFree, style.StatusNoFree].join(" ") :
    style.StatusFree;

  
    let [user, setUser] = useState(null);
  
    let status = async () => {
      let userData = await userStatus()
      console.log(userData)
      if (!user) {
        setUser(userData)
      } else if (userData.id !== user.id) {
        setUser(userData)
      }
    }

    useEffect(() => {
      status();
    }, [user])

  // пока как заглушка по четному id книги
  let isFavorite = false;
  if (user) {
    console.log("AppBook: ", user);
    isFavorite = user.books.favorite.filter(b => b.id === book.id).length > 0;
    console.log("isFavorite", isFavorite);
  }
  console.log("isFavorite", isFavorite);


  const noFreeImage = (book.status === "free")
    ? style.bookImg
    : style.bookImg + " " + style.grayscale;

  return (
    <div className={style.card}>
      <div className={bookId} onClick={props.onClick ? props.onClick : null}>{book.number}</div>
      <div className={style.divImage} onClick={props.onClick ? props.onClick : null}>
        <img className={noFreeImage} alt={book.title} src={book.img} />
      </div>
      <div className={style.author} onClick={props.onClick ? props.onClick : null}>{book.author}</div>
      <div className={style.title} onClick={props.onClick ? props.onClick : null}>{book.title}</div>
      <div className={style.freeFavorite}>
        <div className={StatusFree} onClick={props.onClick ? props.onClick : null}>{(book.status === "free") ? "Читать" : "Читают"}</div>
        <Checkbox checked={isFavorite} />
      </div>
    </div>
  );
}

export default Book;
