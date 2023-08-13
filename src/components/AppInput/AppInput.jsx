import React, { useRef } from "react";
import style from "./style.module.css";
import { clsx } from "clsx";

export function AppInput({ title, description = false, heightLimit = 100, setInput }) {
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
            setInput(event.target.value);
            autoResizeTextarea(event);
          }}
        />
      ) : (
        <input
          className={clsx(style.inputContainer)}
          type="text"
          placeholder={title}

          onChange={(event) => setInput(event.target.value)}
        />
      )}
    </div>
  );
}
