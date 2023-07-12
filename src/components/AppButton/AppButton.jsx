import React from "react";
import style from "./style.module.css";
// import clsx from "clsx";

export function AppButton(props) {
  let buttonClass = style.button;
  if (props.color === "red") {
    buttonClass += " " + style.red;
  } else {
    buttonClass += " " + style.green;
  }
  return (
    <button
      onClick={props.onClick ? props.onClick : null}
      className={buttonClass}
      // className={clsx(style.button, {[style.red]: props.red})}
    >
      {props.header}
    </button>
  );
}
