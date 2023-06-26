import React from "react";
import style from "./style.module.css";

export function AppButton({ header, size = "s" }) {
  let buttomClass = style.button;
  if (size === "m") {
    buttomClass += " " + style.medium;
  } else {
    buttomClass += " " + style.small;
  }

  return <button className={buttomClass}>{header}</button>;
}
