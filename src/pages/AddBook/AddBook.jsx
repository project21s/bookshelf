import React from "react";
import style from "./style.module.css";
import { AppImageDownload } from "../../components/AppImageDownload/AppImageDownload";
import AddBookReduxForm from "./AddBookForm";

const AddBook = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className={style.main}>
      <div className={style.areaForPic}>
        <div>
          <p>Тут ты можешь внести в Школьную библиотеку свою книгу</p>
          <p>Заполни данные ниже и поставь книгу на полку</p>
        </div>
        <AppImageDownload />
      </div>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div>
            <p>Тут ты можешь внести в Школьную библиотеку свою книгу</p>
            <p>Заполни данные ниже и поставь книгу на полку</p>
          </div>
          <AddBookReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddBook;
