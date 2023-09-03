import React, { useContext } from "react";
import style from "./style.module.css";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { AppInput } from "../AppInput/AppInput";
import AppButton from "../AppButton/AppButton";
import { useState } from "react";

import { createUser, logIn } from "../../services/authApiServes";
import { UserContext } from "../../contexts/UserContext";
import { InfoContext } from "../../contexts/InfoContext";

export const PopUp = (props) => {
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");

  const { user, userDispatch } = useContext(UserContext);
  const showAlert = useContext(InfoContext);

  const login = async () => {
    let userTemp = await logIn(mail.toLocaleLowerCase(), password);
    if (userTemp.user) {
      userDispatch({
        type: "update",
        user: userTemp.user,
      });
    } else {
      showAlert(userTemp.error);
    }

    props.close(false);
  };

  let [reg, setReg] = useState(false);
  return !reg ? (
    <>
      <div className={style.background}></div>
      <div className={style.contaner}>
        <div className={style.card}>
          <div className={style.header}>
            <div className={style.header_text}>Вход</div>
            <button onClick={() => props.close(false)}>
              <SvgSelector id="close" />
            </button>
          </div>
          <AppInput title="email" setInput={setMail}></AppInput>
          <br />
          <AppInput
            title="пароль"
            type="password"
            setInput={setPassword}
          ></AppInput>
          <br />
          <div className={style.header}>
            <AppButton header="Войти" onClick={login}></AppButton>
            <AppButton
              header="Регистрация"
              onClick={() => {
                setReg(true);
              }}
            ></AppButton>
          </div>
        </div>
      </div>
    </>
  ) : (
    <PopUpReg close={props.close} newUser={props.newUser}></PopUpReg>
  );
};

export const PopUpReg = (props) => {
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [repeatePass, setRepeatePass] = useState("");

  const { user, userDispatch } = useContext(UserContext);
  const showAlert = useContext(InfoContext);

  const create = async () => {
    if (password !== repeatePass) {
      showAlert("Пароли должны совпадать ");
      return;
    }
    let userTemp = await createUser(mail.toLocaleLowerCase(), password);

    if (userTemp.user) {
      userDispatch({
        type: "update",
        user: userTemp.user,
      });
    } else {
      showAlert(userTemp.error);
    }

    props.close(false);
  };

  return (
    <>
      <div className={style.background}></div>
      <div className={style.contaner}>
        <div className={style.card}>
          <div className={style.header}>
            <div className={style.header_text}>Регистрация</div>
            <button onClick={() => props.close(false)}>
              <SvgSelector id="close" />
            </button>
          </div>
          <AppInput title="email" setInput={setMail}></AppInput>
          <br />
          <AppInput title="пароль" setInput={setPassword}></AppInput>
          <br />
          <AppInput title="повтори пароль" setInput={setRepeatePass}></AppInput>
          <br />
          <div className={style.header}>
            <p>На ваш email придет ссылка для подтверждения регистрация</p>
            <AppButton header="Регистрация" onClick={create}></AppButton>
          </div>
        </div>
      </div>
    </>
  );
};
