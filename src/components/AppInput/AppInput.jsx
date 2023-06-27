import React from "react";
import style from "./style.module.css";

export function AppInput({ title, required }) {
  return (
    <div class={style.inputdiv}>
      <input type="text" className={style.name} required autocomplete="off" />
      <label className={style.label} for="fullname">
        {title}
      </label>
      <div className={style.bar}></div>
    </div>
  );
}
