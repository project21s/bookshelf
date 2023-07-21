// import { style } from "make/src/log";
import React from "react";
import style from "./style.module.css";
import { books } from "../../services/bookMockAPI";
import {  useParams } from "react-router-dom";



const HistoryTable = () => {

  const { id } = useParams();
  const book = id - 1;

  const rows = [];

  for (let i = 0; i < books[book].prev_nick.length; i++) {
    rows.push(
        <tr>
           <td>{books[book].prev_nick[i]}</td>
           <td>{books[book].prev_start[i]}</td>
           <td>{books[book].prev_end[i]}</td>
        </tr>
    )
  };



  return (
    <div>
      <div className={style.prev}>Ранее брали</div>
      <div className={style.history}>
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
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;
