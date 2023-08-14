import React,{ useState } from "react";
import style from "./style.module.css";
import favoriteChecked  from "../../assets/baseline-star.svg"
import favoriteNoChecked from "../../assets/baseline-star-border.svg"


function Checkbox(props) {

  let isChecked = props.checked;
  
  return (
    <label>
      <input className={style.favoriteCheck}
        type="checkbox"
        onChange={() => {
          isChecked = !isChecked;
        }}
        onClick={props.onClick ? props.onClick : null}
      />
        <img className={style.checkbox} alt="" src={isChecked ? favoriteChecked : favoriteNoChecked} />
        {props.title}
    </label>
  );
}

export default Checkbox;
