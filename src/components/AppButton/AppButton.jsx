import React from "react";
import style from "./style.module.css";

export function AppButton({ header, size = "s" }) {
  let buttonClass = style.button;
  if (size === "m") {
    buttonClass += " " + style.medium;
  } else {
    buttonClass += " " + style.small;
  }

  return <button className={buttonClass}>{header}</button>;
}
