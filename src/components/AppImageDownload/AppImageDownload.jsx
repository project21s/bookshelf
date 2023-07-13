import React, { useState } from "react";
import style from "./style.module.css";

export function AppImageDownload() {
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className={style.loadImage} onChange={handleChange}>
      {file ? <img src={file} alt="" /> : <p>Загрузить фото книги</p>}
      <input
        className={style.inputFile}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
      />
    </div>
  );
}
