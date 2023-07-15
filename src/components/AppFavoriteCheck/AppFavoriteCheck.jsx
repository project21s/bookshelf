import React,{ useState } from "react";
import style from "./style.module.css";
import favoriteChecked  from "../../assets/baseline-star.svg"
import favoriteNoChecked from "../../assets/baseline-star-border.svg"

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  return (
    <label>
      <input className={style.favoriteCheck}
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
        <img className={style.checkbox} alt="" src={isChecked ? favoriteChecked : favoriteNoChecked} />
        {props.title}
    </label>
  );
}

export default Checkbox;