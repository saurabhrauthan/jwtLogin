import React from "react";
import css from "./CustomInput.module.css";

const CustomInput = (props) => {
  return (
    <div className={css.inputGroup}>
      <input
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.handleChange}
        value={props.value}
        required={true}
        autoComplete="new-password"
      />
      {props.afterIcon ? (
        <span className={css.icon}> {props.afterIcon}</span>
      ) : null}
    </div>
  );
};

export default CustomInput;
