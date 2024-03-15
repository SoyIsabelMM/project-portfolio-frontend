import React from "react";

function Button({ nameBtn, className, type }) {
  return (
    <button className={className} type={type}>
      {nameBtn}
    </button>
  );
}

export default Button;
