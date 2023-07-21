import React from "react";
import style from "./style.module.css";
import { books } from "../../services/bookMockAPI";
import {  useParams } from "react-router-dom";



const AppReviews = () => {

  const { id } = useParams();
  const book = id - 1;

  const rows = [];

  for (let i = 0; i < books[book].review_nick.length; i++) {
    rows.push(
      <>
          <div className={style.row1}>
            <div className={style.reviewNick}>{books[book].review_nick[i]}</div>
            <div className={style.reviewDate}>{books[book].review_date[i]}</div>
          </div>
            <div className={style.reviewDesc}>{books[book].review[i]}</div>
      </>
    )
  };

  return (
    <div>
      <div className={style.reviewHeader}>
        Комментарии
      </div>
      <div className={style.reviews}>
        {rows.length > 0 ?
        rows.map(row => row) :
         "Комментариев пока нет"}
      </div>
    </div>
  );
};

export default AppReviews;
