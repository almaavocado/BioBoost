import React from "react";

const Button = ({ styles, text, onClick }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
