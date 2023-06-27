import React from "react";
import style from "./style.module.css";

export function AppButton(props) {
  let buttonClass = style.button;
  if (props.size === "m") {
    buttonClass += " " + style.medium;
  } else {
    buttonClass += " " + style.small;
  }

  return (
    <button
      onClick={props.onClick ? props.onClick : null}
      className={buttonClass}
    >
      {props.header}
    </button>
  );
}
