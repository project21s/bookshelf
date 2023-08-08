import React from "react";
import style from "./style.module.css";


export function AppImageDownload({ file, setFile }) {
  function handleChange(e) {
    let img = e.target.files[0];
    setFile(img);
  }
  return (
    <div className={style.loadImage} onChange={handleChange}>
      {file ? <img src={URL.createObjectURL(file)} alt="" /> : <p>Загрузить фото книги</p>}
      <input
        className={style.inputFile}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
      />
    </div>
  );
}
