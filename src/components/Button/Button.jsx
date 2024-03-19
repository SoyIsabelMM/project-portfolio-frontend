import React, { Children } from "react";

function Button({ nameBtn, className, type, children, onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
      {nameBtn}
    </button>
  );
}

export default Button;
