import React, { useState } from "react";

const Input = ({ icon, type, placeholder, name, value, onChange, onBlur }) => {
  const [visible, setVisible] = useState(false);

  const visibilityHandler = () => {
    setVisible(!visible);
  };

  if (type === "password") {
    return (
      <div className="input_Wrapper">
        <i className={`${icon} icon`} />
        <input
          className="input-field"
          name={name}
          type={visible ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {visible ? (
          <i
            onClick={visibilityHandler}
            className="far fa-eye-slash v-icon"
          ></i>
        ) : (
          <i onClick={visibilityHandler} className="far fa-eye v-icon"></i>
        )}
      </div>
    );
  }

  return (
    <div className="input_Wrapper">
      <i className={`${icon} icon`} />
      <input
        className="input-field"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
