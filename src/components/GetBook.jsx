import React /*, { useState }*/ from "react";
import { AppInput } from "./AppInput/AppInput";

const GetBook = (props) => {
  // const [nickname, setNickname] = useState('');

  // const handleSubmit = (/*event*/) => {
  //     // alert('A name was submitted: ' + value);
  //     // event.preventDefault();

  // };

  return (
    <form className="getBook" onSubmit={props.Click}>
      <AppInput title="Ник"></AppInput>
      <div className="action">
        <button type="submit" className="get">
          Взять книгу
        </button>
      </div>
    </form>
  );
};

export default GetBook;
