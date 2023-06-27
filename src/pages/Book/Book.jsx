import React, { useState } from "react";
import style from "./style.module.css";
import { AppButton } from "../../components/AppButton/AppButton";
import { AppInput } from "../../components/AppInput/AppInput";

import "./Book.css";
import GetBook from "../../components/GetBook";
import ReturnBook from "../../components/ReturnBook";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import { books } from "../../services/bookMockAPI";

const Book = () => {
  const [ShowReturnBook, setShowReturnBook] = useState(false);

  const Click = () => {
    setShowReturnBook(!ShowReturnBook);
    console.log(books);
  };

  return (
    <div className={style.main}>
      <AppButton header="На главную" />

      <div className="info">
        <div className="info_head">
          <h1 className="info_head_number">{books[5].id}</h1>
          {books[5].isFree ? (
            <p className="info_head_onHands">на руках</p>
          ) : (
            <p className="info_head_onHands"></p>
          )}
        </div>
        <div className="info_book">
          <img src={books[5].img} alt={books[5].title} />
          <h2 className="info_book_autor">{books[5].author}</h2>
          <h2 className="info_book_name">{books[5].title}</h2>
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
