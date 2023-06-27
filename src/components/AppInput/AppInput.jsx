import React from "react";
import style from "./style.module.css";

export function AppInput(props) {
  return (
    <div className={style.inputdiv}>
      <input
        type="text"
        className={style.name}
        required
        autoComplete="off"
        value={props.value}
        onChange={(e) => {
          props.onChange(e);
        }}
      />
      <label className={style.label}>{props.placeholder}</label>
      <div className={style.bar}></div>
    </div>
  );
}
