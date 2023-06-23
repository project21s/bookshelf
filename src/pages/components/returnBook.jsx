import React from "react";

const ReturnBook = (props) => {
    return (
        <div className="returnBook">
            <h2>Книга на руках</h2>
            <table width={"100%"}>
                <tr>
                    <th align="left" width={"40%"}>nickname</th>
                    <th align="left" width={"30%"}>взял</th>
                    <th align="left" width={"30%"}>сдал</th>
                </tr>
                <tr>
                    <td>Lowellda</td>
                    <td>20.01.2022</td>
                    <td>27.01.2022</td>
                </tr>
            </table>
            <div className="action">
                <button type="submit" onClick={props.Click} className="get">Сдать книгу</button>
            </div>
        </div>
    );
}

export default ReturnBook;