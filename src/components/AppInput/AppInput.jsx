import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { clsx } from "clsx";

export function AppInput(props) {
  const [text, setText] = useState("");
  const isMobile = false;

  //ниже функция для автоматического ресайза textarea,это нужно, так как в описании книги предположительно будет много текста
  const textareaRef = useRef();
  useEffect(() => {
    const element = textareaRef.current;
    const autoResizeTextarea = () => {
      if (element) {
        element.style.height = element.scrollHeight + "px";
        if (element.style.height > "50px") {
          element.style.overflowY = "scroll";
        }
      }
    };
    element && document.addEventListener("input", autoResizeTextarea);
    return () => {
      if (element) document.removeEventListener("input", autoResizeTextarea);
    };
  }, []);

  return (
    <div className={style.inputContainer}>
      {props.description ? (
        <textarea
          ref={textareaRef}
          placeholder={props.title}
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
      ) : (
        <input
          className={clsx(style.inputContainer, { [style.mobile]: isMobile })}
          type="text"
          placeholder={props.title}
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
      )}
    </div>
  );
}
