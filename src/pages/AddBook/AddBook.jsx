import React, { useState } from "react";
import style from "./style.module.css";
import { AppImageDownload } from "../../components/AppImageDownload/AppImageDownload";
import AddBookReduxForm from "./AddBookForm";
import { createBookData } from "../../services/bookApiServes";
import { userData } from "../../services/authApiServes";

const AddBook = () => {
  const onSubmit = async (formData) => {
    console.log(formData);
    await createBookData(formData, userData, file)
    console.log("книга добавлена в базу")
    showStatus()
  };

  const [status, setStatus] = useState(false);

  const showStatus = () => {
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
    }, 2000)
  }

  const [file, setFile] = useState();

  return (
    <div className={style.main}>
      {status && <div className={style.info}>Книга добавлена </div>}
      <div className={style.areaForPic}>
        <div>
          <p>Тут ты можешь внести в Школьную библиотеку свою книгу</p>
          <p>Заполни данные ниже и поставь книгу на полку</p>
        </div>
        <AppImageDownload file={file} setFile={setFile} />
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
