import React from "react";

import SearchBlackIcon from "../../../assets/images/icons/search-black-icon.png";
import SearchGreyIcon from "../../../assets/images/icons/search-grey-icon.png";

import "./Index.css";

export default function SearchInput({
  placeholder,
  value,
  onChange,
  warning = false,
  warningText = "Ничего не найдено",
  searIcon = false,
}) {
  return (
    <div className="search-input">
      <input
        className="search-input__item"
        type="search"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={{
          paddingLeft: searIcon && "50px",
          backgroundImage:
            value?.length === 0 && searIcon && `url(${SearchGreyIcon})`,
        }}
      />

      {warning && <p className="search-input__warning">{warningText}</p>}

      {value?.length > 0 && searIcon && (
        <img
          src={SearchBlackIcon}
          alt="search-icon"
          className="search-input__icon"
        />
      )}
    </div>
  );
}
