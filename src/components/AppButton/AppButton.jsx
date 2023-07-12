import React from "react";
import style from "./style.module.css";
import clsx from "clsx";

export function AppButton(props) {
  return (
    <button
      onClick={props.onClick ? props.onClick : null}
      className={clsx(style.button, { [style.red]: props.red })}
    >
      {props.header}
    </button>
  );
}
