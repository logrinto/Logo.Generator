import React from "react";
import "./styles.css";

const Button = ({ title, onClick }) => (
  <button className="Button" onClick={(e) => onClick(e)}>
    {title}
  </button>
);

export default Button;
