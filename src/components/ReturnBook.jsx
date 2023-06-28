import React from "react";
import { AppButton } from "./AppButton/AppButton";

const ReturnBook = (props) => {
  return (
    <div className="returnBook">
      <h2>Книга на руках</h2>
      <table width={"100%"}>
        <tr>
          <th align="left" width={"40%"}>
            nickname
          </th>
          <th align="left" width={"30%"}>
            взял
          </th>
          <th align="left" width={"30%"}>
            сдал
          </th>
        </tr>
        <tr>
          <td>Lowellda</td>
          <td>20.01.2022</td>
          <td>27.01.2022</td>
        </tr>
      </table>
      <div className="action">
        <AppButton onClick={props.Click} header="Сдать книгу"></AppButton>
      </div>
    </div>
  );
};

export default ReturnBook;
