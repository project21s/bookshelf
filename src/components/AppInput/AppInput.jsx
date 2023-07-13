import React, { useRef, useState } from "react";
import style from "./style.module.css";
import { clsx } from "clsx";

export function AppInput({ title, description = false, heightLimit = 100 }) {
  const [text, setText] = useState("");
  const textarea = useRef();
  const height = +textarea.current?.style.height.replace("px", "");
  const autoResizeTextarea = (event) => {
    event.target.style.height = "45px";
    event.target.style.height = event.target.scrollHeight + "px";
  };
  return (
    <div
      className={clsx(style.inputContainer, {
        [style.scroll]: height > heightLimit,
      })}
    >
      {description ? (
        <textarea
          ref={textarea}
          placeholder={title}
          onChange={(event) => {
            setText(event.target.value);
            autoResizeTextarea(event);
          }}
          value={text}
        />
      ) : (
        <input
          className={clsx(style.inputContainer)}
          type="text"
          placeholder={title}
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
      )}
    </div>
  );
}
