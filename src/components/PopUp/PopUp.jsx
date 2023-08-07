import React from "react";
import style from "./style.module.css";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { AppInput } from "../AppInput/AppInput";
import AppButton from "../AppButton/AppButton";
import { useState } from "react";

import { createUser, logIn } from "../../services/authApiServes";

export const PopUp = (props) => {
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");

  const login = async () => {
    let user = await logIn(mail, password);
    props.close(false)
  }

  let [reg, setReg] = useState(false)
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
          <AppInput title="пароль" setInput={setPassword}></AppInput>
          <br />
          <div className={style.header}>
            <AppButton header="Войти"
              onClick={login}
            ></AppButton>
            <AppButton header="Регистрация"
              onClick={() => { setReg(true) }}
            ></AppButton>
          </div>
        </div>
      </div>
    </>
  ) :
    (<PopUpReg close={props.close}
      newUser={props.newUser} ></PopUpReg>)
};

export const PopUpReg = (props) => {
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [repeatePass, setRepeatePass] = useState("");

  const create = async () => {
    if (password !== repeatePass) {
      return
    }
    let user = await createUser(mail, password);
    props.close(false)
  }

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
          <AppInput title="пароль" setInput={setPassword}></AppInput>
          <AppInput title="повтори пароль" setInput={setRepeatePass}></AppInput>
          <br />
          <div className={style.header}>
            <AppButton header="Регистрация"
              onClick={create}
            ></AppButton>
          </div>
        </div>
      </div>
    </>
  );
};
