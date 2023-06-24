import React, { useState } from "react";
import "./Book.css";
import GetBook from "./components/GetBook";
import ReturnBook from "./components/ReturnBook";
import Table from "./components/Table";

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
                <img src="bookImg/Rectangle_2.png" alt="Book"/>
                <h2 className="info_book_autor">Э. Голдратт</h2>
                <h2 className="info_book_name">Критическая цепь</h2>
            </div>
        </div>

        {ShowReturnBook ? <ReturnBook Click={Click} /> : <GetBook Click={Click}/>}
        
        <Table />
        </>
    );
}

export default Book;