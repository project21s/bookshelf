import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./style.module.css";
import { AppButton } from "../../components/AppButton/AppButton";
import { AppInput } from "../../components/AppInput/AppInput";
import { AppImageDownload } from "../../components/AppImageDownload/AppImageDownload";

const AddBook = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className={style.main}>
        <div>
          <AppButton size="s" header="На главную" onClick={goHome} />
        </div>
        <br />
        <div>
          Тут ты можешь внести в Школьную библиотеку свою книгу Заполни данные
          ниже и поставь книгу на полку
        </div>
        <br />
        <form>
          <div className={style.BeforeLoad}>
            {" "}
            Загрузить
            <br />
            фото кники
          </div>
          <AppImageDownload />
          <br />
          <AppInput placeholder="Номер" />
          <br />
          <AppInput placeholder="Автор" />
          <br />
          <AppInput placeholder="Название" />
          <br />
          <AppInput placeholder="Ник" />
        </form>
        <br />
        <div>
          Не забудь прикрепить малярный скочт на книгу с указанием порядкогово
          номера и своего ника
        </div>
        <br />
        <div className={style.ButtonAddBook}>
          <AppButton size="m" header="Добавить книгу" />
        </div>
      </div>
    </div>
  );
};

export default AddBook;
