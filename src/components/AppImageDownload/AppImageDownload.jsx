import React from "react";
import style from "./style.module.css";

export function AppImageDownload({ file, setFile, title }) {
  function handleChange(e) {
    let img = e.target.files[0];
    setFile(img);
  }
  return (
    <div className={style.loadImage} onChange={handleChange}>
      {file ? (
        <img src={URL.createObjectURL(file)} alt="prev" />
      ) : (
        <p>{title}</p>
      )}
      <input
        className={style.inputFile}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
      />
    </div>
  );
}
