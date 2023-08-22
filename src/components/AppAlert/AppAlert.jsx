import React from "react";
import style from "./style.module.css";

export function AppAlert(props) {
  return (
    <div style={{ left: `${props.left + 14}px` }} className={style.main}>
      {String(props.children)}
    </div>
  );
}

export default AppAlert;
