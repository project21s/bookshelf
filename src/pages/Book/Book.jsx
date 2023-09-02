import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { AppButton } from "../../components/AppButton/AppButton";
// import AppInput from "../../components/AppInput/AppInput";

// import "./Book.css";
// import GetBook from "../../components/GetBook";
// import ReturnBook from "../../components/ReturnBook";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
// import AppReviews from "../../components/AppReviews/AppReviews";
import Checkbox from "../../components/AppFavoriteCheck/AppFavoriteCheck";
// import GetBook from "../../components/GetBook";

import {
  getBookById,
  onHandBook,
  onFreeBook,
} from "../../services/bookApiServes";
import { addToFavorite, delFromFavorite } from "../../services/userApiServes";
import { userStatus } from "../../services/authApiServes";

import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Book = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const nullBook = {
    id: "",
    number: 0,
    author: "book.author",
    title: "",
    description: "",
    img: "",
    status: "free",
    RFID: "",
  };
  let [book, setBook] = useState(nullBook);

  let getBook = async () => {
    let bookTmp = await getBookById(id);
    if (!bookTmp) {
      navigate("*");
    }
    setBook(bookTmp);
    console.log(bookTmp);
  };

  const { user, userDispatch } = useContext(UserContext);

  console.log(user);

  let [bookStatus, setBookStatus] = useState(null);

  let bookStatusFunc = async () => {
    let onMyHand = false;
    if (user) {
      onMyHand = user.books.read.filter((b) => b.id === book.id).length > 0;
    }
    if (book.status === "free" && user) {
      setBookStatus(1);
    }
    if (book.status === "free" && !user) {
      setBookStatus(2);
    }
    if (book.status !== "free" && onMyHand) {
      setBookStatus(3);
    } else if (book.status !== "free") {
      setBookStatus(4);
    }

    if (user) {
      if (!user.isEmailVerified) {
        setBookStatus(6);
      }
      if (!user.isVerified) {
        setBookStatus(5);
      }
    }
  };

  let [isFavorite, setIsFavorite] = useState(false);
  let [titleFavorite, setTitleFavorite] = useState("Добавить в избранное");

  let isFavoriteFunc = () => {
    if (user) {
      if (user.books.favorite.filter((b) => b.id === book.id).length > 0) {
        setIsFavorite(true);
        setTitleFavorite("Убрать из избраного");
      }
    }
  };

  useEffect(() => {
    getBook();
    bookStatusFunc();
    isFavoriteFunc();
  }, [book.status, user]);
  // const [ShowReturnBook, setShowReturnBook] = useState(!books[bookid].isFree);

  // const Click = () => {
  //   setShowReturnBook(!ShowReturnBook);
  //   console.log(books);
  // };

  const bookId =
    book.status === "free"
      ? [style.bookId, style.bookIdFree].join(" ")
      : [style.bookId, style.bookIdNoFree].join(" ");

  const noFreeImage =
    book.status === "free"
      ? style.bookImg
      : style.bookImg + " " + style.grayscale;

  const getBookOnHand = async () => {
    await onHandBook(user, book);
    await getBook();
    const userTemp = await userStatus();

    userDispatch({
      type: "update",
      user: userTemp,
    });
  };

  const setBookBeFree = async () => {
    await onFreeBook(user, book);
    await getBook();
    const userTemp = await userStatus();

    userDispatch({
      type: "update",
      user: userTemp,
    });
  };

  const getBookFavorite = async () => {
    console.log("getBookFavorite");
    await addToFavorite(user, book);
    await getBook();
  };

  const outBookFavorite = async () => {
    console.log("outBookFavorite");
    await delFromFavorite(user, book);
    await getBook();
  };

  let getBookFavoriteFunc = () => {
    if (user) {
      if (isFavorite) {
        outBookFavorite();
        setTitleFavorite("Добавить в избранное");
        setIsFavorite(false);
      } else {
        getBookFavorite();
        setTitleFavorite("Убрать из избранного");
        setIsFavorite(true);
      }
    } else {
      if (isFavorite) {
        setTitleFavorite("Добавить в избранное");
        setIsFavorite(false);
      } else {
        setTitleFavorite("Убрать из избранного");
        setIsFavorite(true);
      }
    }
  };

  console.log("before return isFavorite: ", isFavorite);
  return (
    <div className={style.main}>
      <div className={style.historyTable}>
        <div>
          <HistoryTable readBefore={book.readBefore} />
        </div>
        {/* TODO ниже блок с комментариями, добавить позже */}
        {/* <div >
          <AppReviews id={2} />
        {/* TODO ниже блок с комментариями, добавить позже */}
        {/* <div>
          <AppReviews id={2} />
        </div>
        <div>
          <div className={style.countReview}> {textareaValue.length}/500</div>
          <textarea
            className={style.comment}
            placeholder="Оставить отзыв о книге"
            value={textareaValue}
            onChange={(event) =>
              setTextareaValue((prevTextareaValue) => {
                const newTextareaValue = event.target.value;
                if (newTextareaValue.length > 500) return prevTextareaValue;
                return newTextareaValue;
              })
            }
          />
        </div>
        <div className={style.addReviewButton}>
          <AppButton header="Добавить" />
        </div> */}
        {/* TODO выше блок с комментариями, добавить позже */}
      </div>
      <div className={style.about}>
        <div className={style.wrapper}>
          <div className={style.divImage}>
            <img className={noFreeImage} alt={book.title} src={book.img} />
          </div>
          <div className={style.info}>
            <div>
              <div className={bookId}>{book.number}</div>
              <div className={style.author}>{book.author}</div>
              <div className={style.title}>{book.title}</div>
            </div>
            <Checkbox
              checked={isFavorite}
              title={titleFavorite}
              onClick={getBookFavoriteFunc}
            />
          </div>
        </div>
        <div className={style.desc}>
          {book.description === ""
            ? "Описание еще не добавили"
            : book.description}
        </div>
        <div className={style.getBook}>
          {/* <GetBook /> */}
          {bookStatus === 1 && (
            <AppButton header="Взять книгу" onClick={getBookOnHand} />
          )}
          {bookStatus === 2 && (
            <AppButton
              header="Книга свободна, войдите в систему, чтобы взять книгу"
              disabled="disabled"
            />
          )}
          {bookStatus === 3 && (
            <AppButton header="Сдать книгу" onClick={setBookBeFree} />
          )}
          {bookStatus === 4 && (
            <AppButton header="Книга занята" disabled="disabled" />
          )}
          {bookStatus === 4 && (
            <div>
              <br />
              Сейчас читает: {book.readNow.nickname}
            </div>
          )}
          {(bookStatus === 5 || bookStatus === 6) && (
            <AppButton header="Подтвердите email" disabled="disabled" />
          )}
          {bookStatus === 5 && (
            <div>
              <br />
              Не можете взять книгу - Вы зарегистрировались не со школьной
              почты, дождитесь подтверждения
            </div>
          )}
          {bookStatus === 6 && (
            <div>
              <br />
              Не можете взять книгу - Вы не подтвердили свой email
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

//  <div className={style.main}>
//   <div className="info">
//     <div className="info_head">
//       <h1 className="info_head_number">{books[bookid].id}</h1>
//       {!books[bookid].isFree ? (
//         <p className="info_head_onHands">на руках</p>
//       ) : (
//         <p className="info_head_onHands"></p>
//       )}
//     </div>
//     <div className="info_book">
//       <img src={books[bookid].img} alt={books[bookid].title} />
//       <h2 className="info_book_autor">{books[bookid].author}</h2>
//       <h2 className="info_book_name">{books[bookid].title}</h2>
//     </div>
//   </div>

//   {ShowReturnBook ? (
//     <ReturnBook Click={Click} />
//   ) : (
//     <GetBook Click={Click} />
//   )}

//   <HistoryTable />
//  </div>

export default Book;
