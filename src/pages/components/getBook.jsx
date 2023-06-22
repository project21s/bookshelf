import React from "react";

const getBook = () => {
    return (
        <form className="getBook" /*onSubmit={}*/>
            <div class="input-div">
                <input type="text" className="Name" required autocomplete="off" />
                <label for="fullname">Ник</label>
                <div class="bar"></div>
            </div>
            <div className="action">
                <button type="submit" className="get">Взять книгу</button>
            </div>
        </form>
    );
}

export default getBook;