import React, { useState, useContext } from "react";
import style from "./style.module.css";
import { AppImageDownload } from "../../components/AppImageDownload/AppImageDownload";
import AddBookReduxForm from "./AddBookForm";
import { createBookData } from "../../services/bookApiServes";
import { userData } from "../../services/authApiServes";
import { UserContext } from "../../contexts/UserContext";
import { InfoContext } from "../../contexts/InfoContext";

const AddBook = () => {
  const { user, userDispatch } = useContext(UserContext);
  const showAlert = useContext(InfoContext);

  const onSubmit = async (formData) => {
    console.log(formData);
    await createBookData(formData, userData, file);

    showAlert("книга добавлена в базу");
  };

  const [file, setFile] = useState();

  return (
    <div className={style.main}>
      <div className={style.areaForPic}>
        <div>
          <p>Тут ты можешь внести в Школьную библиотеку свою книгу</p>
          {user ? (
            <p>Заполни данные ниже и поставь книгу на полку</p>
          ) : (
            <p>Выполни вход, чтобы добавить книгу</p>
          )}
        </div>
        {user && <AppImageDownload file={file} setFile={setFile} />}{" "}
      </div>
      {user && (
        <div className={style.container}>
          <div className={style.wrapper}>
            <div>
              <p>Тут ты можешь внести в Школьную библиотеку свою книгу</p>
              <p>Заполни данные ниже и поставь книгу на полку</p>
            </div>
            <AddBookReduxForm onSubmit={onSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBook;
