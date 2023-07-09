import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { clsx } from "clsx";

export function AppInput(props) {
  const [text, setText] = useState("");
  const isMobile = false;

  //ниже функция для автоматического ресайза textarea,это нужно, так как в описании книги предположительно будет много текста
  const textareaRef = useRef();
    const [height, setHeight] = useState(0)
    useEffect(() => {
    const element = textareaRef.current;
    if (!element) return
    setHeight(element.scrollHeight)
    const autoResizeTextarea = () => {
        setHeight(element.scrollHeight)
    };
    document.addEventListener("input", autoResizeTextarea);
    return () => {
   document.removeEventListener("input", autoResizeTextarea);
    };
  }, []);

  return (
    <div className={clsx(style.inputContainer, {[style.scroll] : height > 50})}>
      {props.description ? (
        <textarea
            style={{height:`${height}px`}}
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
