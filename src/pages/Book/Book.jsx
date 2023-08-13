import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { AppButton } from "../../components/AppButton/AppButton";
// import AppInput from "../../components/AppInput/AppInput";

// import "./Book.css";
// import GetBook from "../../components/GetBook";
// import ReturnBook from "../../components/ReturnBook";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import AppReviews from "../../components/AppReviews/AppReviews";
import Checkbox from "../../components/AppFavoriteCheck/AppFavoriteCheck";
// import GetBook from "../../components/GetBook";

import { getBookById, onHandBook, onFreeBook } from "../../services/bookApiServes";
import { addToFavorite, delFromFavorite } from "../../services/userApiServes";
import { userStatus } from "../../services/authApiServes";
import { async } from "@firebase/util";


const Book = () => {
  // let navigate = useNavigate();

  // const goHome = () => {
  //   navigate("/");
  // };

  const [textareaValue, setTextareaValue] = useState("");

  const { id } = useParams();

  const nullBook = {
    id: '',
    number: 0,
    author: 'book.author',
    title: "",
    description: "",
    img: "",
    status: "free",
    RFID: "",
  }
  let [book, setBook] = useState(nullBook);

  let getBook = async () => {
    let bookTmp = await getBookById(id)
    setBook(bookTmp);
    console.log(bookTmp)
  }

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

  let [bookStatus, setBookStatus] = useState(null);


  let bookStatusFunc = () => {
    let onMyHand = false;
    if (user) {
      onMyHand = user.books.read.filter(b => b.id === book.id).length > 0
    }
    if (book.status === "free" && user) {
      setBookStatus(1)
    }
    if (book.status === "free" && !user) {
      setBookStatus(2)
    }
    if (book.status !== "free" && onMyHand) {
      setBookStatus(3)
    } else if (book.status !== "free") {
      setBookStatus(4)
    }
  }

  let [favoriteStatus, setfavoriteStatus] = useState(null);

  let isFavorite = false;

  let isFavoriteFunc = () => {
    if (user) {
      isFavorite = user.books.favorite.filter(b => b.id === book.id).length > 0;
      // console.log("isFavorite", isFavorite);
    }
  }

  let favoriteStatusFunc = () => {
    console.log("favoriteStatusFunc", user);
    if (isFavorite === true && user) {
      setfavoriteStatus(1)
    }
     if (isFavorite === false && user) {
      setfavoriteStatus(2)
    }
     if (!user) {
      setfavoriteStatus(3)
    } 
  }




  useEffect(() => {
    if (!book.id) {
      getBook()
    }
    status();
    bookStatusFunc();
    favoriteStatusFunc();
    isFavoriteFunc();
  }, [book, user])
  // const [ShowReturnBook, setShowReturnBook] = useState(!books[bookid].isFree);

  // const Click = () => {
  //   setShowReturnBook(!ShowReturnBook);
  //   console.log(books);
  // };

  const bookId = (book.status === "free") ?
    [style.bookId, style.bookIdFree].join(" ") :
    [style.bookId, style.bookIdNoFree].join(" ");

  const noFreeImage = (book.status === "free")
    ? style.bookImg
    : style.bookImg + " " + style.grayscale;
    if (user) {
    }

  const getBookOnHand = async () => {
    await onHandBook(user, book)
    await getBook()
    setUser(null)
  }

  const setBookBeFree = async () => {
    await onFreeBook(user, book)
    await getBook()
    setUser(null)
  }


  return (
    <div className={style.main}>
      <div className={style.historyTable}>
        <div >
          <HistoryTable readBefore={book.readBefore} />
        </div>
        {/* TODO ниже блок с комментариями, добавить позже */}
        {/* <div >
          <AppReviews id={2} />
        </div>
        <div>
          <div className={style.countReview}> {textareaValue.length}/500</div>
          <textarea className={style.comment}
            placeholder="Оставить отзыв о книге"
            value={textareaValue}
            onChange={(event) => setTextareaValue(prevTextareaValue => {
              const newTextareaValue = event.target.value;
              if (newTextareaValue.length > 500) return prevTextareaValue;
              return newTextareaValue;
            })} />
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
              <div className={bookId} >{book.number}</div>
              <div className={style.author} >{book.author}</div>
              <div className={style.title}>{book.title}</div>
            </div>
            {(favoriteStatus === 1) && <Checkbox chacked="true" title="Убрать из избранного" userId={user} bookId={book} />}
            {(favoriteStatus === 2) && <Checkbox chacked="false" title="Добавить в избранное" userId={user} bookId={book} />}
            {(favoriteStatus === 3) && <Checkbox chacked="true" title="Добавить в избранное" />}
          </div>
        </div>
        <div className={style.desc}>{book.description === "" ? "Описание еще не добавили" : book.description}</div>
        <div className={style.getBook}>
          {/* <GetBook /> */}
          {(bookStatus === 1) && <AppButton header="Взять книгу" onClick={getBookOnHand} />}
          {(bookStatus === 2) && <AppButton header="Книга свободна, войдите в систему, чтобы взять книгу" disabled="disabled" />}
          {(bookStatus === 3) && <AppButton header="Сдать книгу" onClick={setBookBeFree} />}
          {(bookStatus === 4) && (<AppButton header="Книга занята" disabled="disabled" />)}
          {(bookStatus === 4) && (<div>Сейчас читает: {book.readNow.nickname}</div>)}
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
