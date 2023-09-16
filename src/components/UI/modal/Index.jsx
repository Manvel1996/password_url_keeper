import React from "react";

import "./Index.css";

export default function Modal({ children, visible }) {
  return (
    <div className={`modal ${visible && "modal--active"}`}>
      <div
        className={`modal-content  ${visible && "modal--active"}`}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
