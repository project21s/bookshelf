import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import Checkbox from "../AppFavoriteCheck/AppFavoriteCheck";
import { userStatus } from "../../services/authApiServes";
import { async } from "@firebase/util";
import { addToFavorite, delFromFavorite } from "../../services/userApiServes";
import { getBookById } from "../../services/bookApiServes";



function Book(props) {

  let [book, setBook] = useState(props.book);
  // let book = props.book;

  let getBook = async () => {
    let bookTmp = await getBookById(book.id)
    setBook(bookTmp);
    console.log(bookTmp)
  }

  const bookId = (book.status === "free") ?
    [style.bookId, style.bookIdFree].join(" ") :
    [style.bookId, style.bookIdNoFree].join(" ");

  const StatusFree = (book.status === "free") ?
    [style.StatusFree, style.StatusNoFree].join(" ") :
    style.StatusFree;

  
    let [user, setUser] = useState(null);
  
    let status = async () => {
      let userData = await userStatus()
      // console.log(userData)
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
  let [isFavorite, setIsFavorite] = useState(false);
  let isFavoriteFunc = () => {
    if (user) {
        setIsFavorite(user.books.favorite.filter(b => b.id === book.id).length > 0);
    }
  }


  const noFreeImage = (book.status === "free")
    ? style.bookImg
    : style.bookImg + " " + style.grayscale;

    useEffect(() => {
      status();
      isFavoriteFunc();
    }, [book, user])

    const getBookFavorite = async () => {
      console.log("getBookFavorite");
      await addToFavorite(user, book)
      await getBook()
      // setUser(null)
    }
  
    const outBookFavorite = async () => {
      console.log("outBookFavorite");
      await delFromFavorite(user, book)
      await getBook()
      // setUser(null)
    }

    let getBookFavoriteFunc = () => {
      if (isFavorite) {
        outBookFavorite();
        setIsFavorite(false);
      } else {
        getBookFavorite();
        setIsFavorite(true);
      }
    }

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
        <Checkbox checked={isFavorite} title="" onClick={getBookFavoriteFunc} />
      </div>
    </div>
  );
}

export default Book;
