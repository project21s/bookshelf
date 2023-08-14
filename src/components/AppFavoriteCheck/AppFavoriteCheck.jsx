import React,{ useState } from "react";
import style from "./style.module.css";
import favoriteChecked  from "../../assets/baseline-star.svg"
import favoriteNoChecked from "../../assets/baseline-star-border.svg"


function Checkbox(props) {

  let isChecked = props.checked;
  console.log("props.checked: ", isChecked)

  return (
    <label>
      <input className={style.favoriteCheck}
        type="checkbox"
        onChange={() => {
          console.log("setIsChecked: ", isChecked);
          isChecked = !isChecked;
          console.log("setIsChecked: ", isChecked);
        }}
        onClick={props.onClick ? props.onClick : null}
      />
      {console.log("////////: ", isChecked)}
        <img className={style.checkbox} alt="" src={isChecked ? favoriteChecked : favoriteNoChecked} />
        {props.title}
    </label>
  );
}

export default Checkbox;
