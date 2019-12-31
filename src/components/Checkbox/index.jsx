import React from "react";
import "./styles.css";

const Checkbox = ({ checked, onChange }) => (
  <div className="Checkbox">
    <input
      id="typoon"
      type="checkbox"
      name="Checkbox"
      className="Checkbox__checkbox"
      checked={checked}
      onChange={e => onChange(e.target.checked)}
    />
    <label className="Checkbox__label" htmlFor="typoon">
      <span className="Checkbox__inner"></span>
      <span className="Checkbox__switch"></span>
    </label>
  </div>
);

export default Checkbox;
