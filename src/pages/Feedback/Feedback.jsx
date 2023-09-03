import React, { useState, useEffect, useContext } from "react";
import style from "./style.module.css";

import AppButton from "../../components/AppButton/AppButton";

import { addFeedback } from "../../services/feedbackServes";
import { AppImageDownload } from "../../components/AppImageDownload/AppImageDownload";

function Feedback() {
  const [text, setText] = useState("");
  const [statusSend, setStatusSend] = useState(false);
  const [file, setFile] = useState();

  const handler = async () => {
    let status = await addFeedback(text, file);
    if (status.status) {
      setStatusSend(true);
    }
  };

  return (
    <div className={style.main}>
      <h2>
        Данный сервис разработан участниками клуба по JS разработке школы 21
        Казань
      </h2>
      <br />
      <h3>
        Оставьте свой отзыв о работе сервиса, предложения по его улучшению
      </h3>
      <br />
      <p>
        Если хочешь принять участие в разработке сервиса оставь свой ник на
        платформе или в телеге, расскажи что умеешь и что хочешь делать
      </p>
      <br />

      {!statusSend && (
        <div>
          <div className={style.flex}>
            <div className={style.dwl}>
              <AppImageDownload
                file={file}
                setFile={setFile}
                title="Прикрепить фото"
              />
            </div>
            <textarea
              className={style.in}
              value={text}
              placeholder="Текст сообщения"
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
          </div>
          <div className={style.btn}>
            <AppButton
              header="Отправить"
              onClick={() => {
                handler();
              }}
            ></AppButton>
          </div>
        </div>
      )}
      {statusSend && (
        <div>
          <div className={style.btn}>
            <h2>Отправленно</h2>
            <AppButton
              header="Новое сообщение"
              onClick={() => {
                setStatusSend(false);
                setText("");
                setFile();
              }}
            ></AppButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feedback;
