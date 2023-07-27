import React from "react";
import style from "./style.module.css";
import clsx from "clsx";

export function AppButton(props) {
  return (
    <button disabled={props.disabled}
      onClick={props.onClick ? props.onClick : null}
      className={clsx(style.button, { [style.red]: props.red }, { [style.scrollUp]: props.scrollUp })}
    >
      {props.header}
    </button>
  );
}

export default AppButton;