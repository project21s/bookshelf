import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./style.module.css";
import { AppButton } from "../../components/AppButton/AppButton";
// import { AppInput } from "../../components/AppInput/AppInput";

import "./Book.css";
import GetBook from "../../components/GetBook";
import ReturnBook from "../../components/ReturnBook";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import { books } from "../../services/bookMockAPI";

const Book = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const { id } = useParams();
  const bookid = id - 1;

  const [ShowReturnBook, setShowReturnBook] = useState(!books[bookid].isFree);

  const Click = () => {
    setShowReturnBook(!ShowReturnBook);
    console.log(books);
  };

  return (
    <div className={style.main}>
      <AppButton header="На главную" onClick={goHome} />

      <div className="info">
        <div className="info_head">
          <h1 className="info_head_number">{books[bookid].id}</h1>
          {!books[bookid].isFree ? (
            <p className="info_head_onHands">на руках</p>
          ) : (
            <p className="info_head_onHands"></p>
          )}
        </div>
        <div className="info_book">
          <img src={books[bookid].img} alt={books[bookid].title} />
          <h2 className="info_book_autor">{books[bookid].author}</h2>
          <h2 className="info_book_name">{books[bookid].title}</h2>
        </div>
      </div>

      {ShowReturnBook ? (
        <ReturnBook Click={Click} />
      ) : (
        <GetBook Click={Click} />
      )}

      <HistoryTable />
    </div>
  );
};

export default Book;
