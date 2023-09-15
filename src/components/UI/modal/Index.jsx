import React from "react";

import "./Index.css";

export default function Modal({ children, visible, setVisible }) {
  return (
    <div
      className={`modal ${visible && "modal--active"}`}
      onClick={() => setVisible(false)}>
      <div
        className={`modal-content  ${visible && "modal--active"}`}
        onClick={(e) => e.stopPropagation()}>
        <p className="modal-content__close" onClick={() => setVisible(false)}>
          x
        </p>
        {children}
      </div>
    </div>
  );
}
