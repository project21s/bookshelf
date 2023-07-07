import React, { useState } from "react";
import style from "./style.module.css";

  export function AppImageDownload() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
    <div className={style.LoaderImage} onChange={handleChange}>
        <img className={style.LoadImage} src={file}  alt="inputImg"/>
        <input className={style.LoadButton} type="file" accept="image/png, image/jpeg, image/jpg"/>
    </div>
    );
  }

  export default AppImageDownload;