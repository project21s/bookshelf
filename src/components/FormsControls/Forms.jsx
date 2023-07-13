import React from "react";

export const Input = ({ input, meta, ...props }) => {
  const error = meta.touched && meta.error;
  return (
    <div>
      <div {...input} {...props}>
        {props.children}
      </div>

      {error && <span>{meta.error}</span>}
    </div>
  );
};
