import React, { useState } from "react";
import "./Book.css";
import GetBook from "./components/GetBook";
import ReturnBook from "./components/ReturnBook";

const Book = () => {
    const [ShowReturnBook, setShowReturnBook] = useState(false);

    const Click = () => {
        setShowReturnBook(!ShowReturnBook);
    };

    return (
        <>
        <button className="goHome">На главную</button>

        <div className="info">
            <div className="info_head">
                <h1 className="info_head_number">30</h1>
                <p className="info_head_onHands">на руках</p>
            </div>
            <div className="info_book">
                <img alt="Book"/>
                <h2 className="info_book_autor">Э. Голдратт</h2>
                <h2 className="info_book_name">Критическая цепь</h2>
            </div>
        </div>

        {ShowReturnBook ? <ReturnBook Click={Click} /> : <GetBook Click={Click}/>}
        
        <div className="history">
            <h2>Ранее брали</h2>
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
        </div>
        </>
    );
}

export default Book;