import React,{ useState } from "react";
import style from "./style.module.css";
import favoriteChecked  from "../../assets/baseline-star.svg"
import favoriteNoChecked from "../../assets/baseline-star-border.svg"
// import { userStatus } from "../../services/authApiServes";
import { addToFavorite, delFromFavorite } from "../../services/userApiServes";



function Checkbox(props) {



  const getBookFavorite = async () => {
    console.log("getBookFavorite");
    await addToFavorite(props.userId, props.bookId)
    // await getBook()
    // setUser(null)
  }

  const outBookFavorite = async () => {
    console.log("outBookFavorite");
    await delFromFavorite(props.userId, props.bookId)
    // await getBook()
    // setUser(null)
  }

  let [isChecked, setIsChecked] = useState(props.checked);
  if (props.userId) {
    if (isChecked) outBookFavorite();
    else getBookFavorite();
  }

  console.log("AppFavoriteCheck-isChecked: ", isChecked);

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
