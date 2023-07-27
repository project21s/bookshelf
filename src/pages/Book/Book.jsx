import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import style from "./style.module.css";
import { AppButton } from "../../components/AppButton/AppButton";
// import AppInput from "../../components/AppInput/AppInput";

// import "./Book.css";
// import GetBook from "../../components/GetBook";
// import ReturnBook from "../../components/ReturnBook";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import AppReviews from "../../components/AppReviews/AppReviews";
import { books } from "../../services/bookMockAPI";
import Checkbox from "../../components/AppFavoriteCheck/AppFavoriteCheck";
// import GetBook from "../../components/GetBook";

const Book = () => {
  // let navigate = useNavigate();

  // const goHome = () => {
  //   navigate("/");
  // };

  const [textareaValue, setTextareaValue] = useState('');

  const { id } = useParams();
  const book = id - 1;

  // const [ShowReturnBook, setShowReturnBook] = useState(!books[bookid].isFree);

  // const Click = () => {
  //   setShowReturnBook(!ShowReturnBook);
  //   console.log(books);
  // };

  const bookId = books[book].isFree ? 
  [style.bookId, style.bookIdFree].join(" ") : 
  [style.bookId, style.bookIdNoFree].join(" ");

  const noFreeImage = books[book].isFree
  ? style.bookImg
  : style.bookImg + " " + style.grayscale;

  const isFavorite = (book.id % 2 === 0) ? true : false;

  return (
    <div className={style.main}>
      <div className={style.historyTable}>
        <div >
        <HistoryTable id={id} />  
        </div>
        <div >
        <AppReviews id={id} />
        </div>
        <div>
          <div className={style.countReview}> {textareaValue.length}/500</div>
          <textarea className={style.comment} 
          placeholder="Оставить отзыв о книге"
          value={textareaValue} 
                onChange={(event) => setTextareaValue(prevTextareaValue => {
                  const newTextareaValue =  event.target.value;
                  if(newTextareaValue.length > 500) return prevTextareaValue;
                  return newTextareaValue;
                })} />
        </div>
        <div className={style.addReviewButton}>
          <AppButton header="Добавить" />
        </div>
      </div>
      <div className={style.about}>
        <div className={style.wrapper}>
          <div className={style.divImage}>
            <img className={noFreeImage} alt={books[book].title} src={books[book].img} />
          </div>
          <div className={style.info}>
            <div>
              <div className={bookId} >{books[book].id}</div>
              <div className={style.author} >{books[book].author}</div>
              <div className={style.title}>{books[book].title}</div>
            </div>
            <Checkbox checked={isFavorite} title="Добавить в избраанное" /> 
          </div>
        </div>  
        <div className={style.desc}>{books[book].desc === "" ? "Описание еще не добавили" : books[book].desc}</div>
        <div className={style.getBook}>
          {/* <GetBook /> */}
          {books[book].isFree ? <AppButton header="Взять книгу" /> : <AppButton header="Книга занята" disabled="disabled" />}
        </div>
      </div>  
    </div>  
     
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
  );
};

export default Book;
