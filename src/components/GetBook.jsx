import React/*, { useState }*/ from "react";

const GetBook = (props) => {
    // const [nickname, setNickname] = useState('');

    // const handleSubmit = (/*event*/) => {
    //     // alert('A name was submitted: ' + value);
    //     // event.preventDefault();
        
    // };

    return (
        <form className="getBook" onSubmit={props.Click}>
            <div class="input-div">
                <input type="text" className="Name" required autocomplete="off" />
                <label for="fullname">Ник</label>
                <div class="bar"></div>
            </div>
            <div className="action">
                <button type="submit"  className="get">Взять книгу</button>
            </div>
        </form>
    );
}

export default GetBook;