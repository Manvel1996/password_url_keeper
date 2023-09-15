import React from "react";

import AddIcon from "../../../assets/images/icons/add-icon.png";

import "./Index.css";

export default function AddButton({ children, addHandler }) {
  return (
    <button onClick={addHandler} className="add-button">
      <img src={AddIcon} alt="add-icon" className="add-button__icon" />
      <p className="add-button__text">{children}</p>
    </button>
  );
}
