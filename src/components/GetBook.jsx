import React /*, { useState }*/ from "react";
import { AppInput } from "./AppInput/AppInput";
import { AppButton } from "./AppButton/AppButton";

const GetBook = (props) => {
  // const [nickname, setNickname] = useState('');

  const handleSubmit = (event) => {
    // alert("A name was submitted: " + value);
    event.preventDefault();
  };

  return (
    <form className="getBook" onSubmit={handleSubmit}>
      <AppInput placeholder="Ник"></AppInput>
      <br />
      <div className="action">
        <AppButton onClick={props.Click} header="Взять книгу"></AppButton>
      </div>
    </form>
  );
};

export default GetBook;
