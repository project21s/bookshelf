import React from "react";
import style from "./style.module.css";

const HistoryTable = ({ readBefore }) => {

  const rows = [];
  if (readBefore) {
    for (let i = 0; i < readBefore.length; i++) {
      rows.push(
        <tr key={i}>
          <td>{readBefore[i].nickname}</td>
          <td>{readBefore[i].dateStart.toDate().getDate()}:{readBefore[i].dateStart.toDate().getMonth() + 1}:{readBefore[i].dateStart.toDate().getFullYear()}</td>
          <td>{readBefore[i].dateFinish.toDate().getDate()}:{readBefore[i].dateFinish.toDate().getMonth() + 1}:{readBefore[i].dateFinish.toDate().getFullYear()}</td>
        </tr>
      )
    };
  }


  return (
    <div>
      <div className={style.prev}>Ранее брали</div>
      <div className={style.history}>
        {rows.length > 0 ?
          <table width={"100%"}>
            <thead>
              <tr>
                <th align="left" width={"30%"}>
                  nickname
                </th>
                <th align="left" width={"35%"}>
                  взял
                </th>
                <th align="left" width={"35%"}>
                  сдал
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => row)}
            </tbody>
          </table> : "Книгу еще не брали"}
      </div>
    </div>
  );
};

export default HistoryTable;
