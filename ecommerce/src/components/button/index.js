import React from "react";
import "./styles.scss";
export default function Button({ customClassName, lable }) {
  return (
    <div className="container">
      <button
        type="button"
        className={`btn btn-dark  container__btn_class ${customClassName}`}
      >
        {lable}
      </button>
    </div>
  );
}
