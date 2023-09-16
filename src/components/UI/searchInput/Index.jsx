import React from "react";

import "./Index.css";

export default function SearchInput({
  placeholder,
  value,
  onChange,
  warning = false,
  warningText = "Ничего не найдено",
}) {
  return (
    <div className="search-input">
      <input
        className="search-input__item"
        type="search"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {warning && <p className="search-input__warning">{warningText}</p>}
    </div>
  );
}
