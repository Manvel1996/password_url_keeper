import React, { useState } from "react";

import "../../assets/styles/components/pswUrlKeeper/Colors.css";

export default function Colors({
  colors = [
    { id: 1, color: "red", code: "#D30000" },
    { id: 2, color: "orange", code: "#FF7A00" },
    { id: 3, color: "yellow", code: "#FFCA28" },
    { id: 4, color: "lightGreen", code: "#A8F600" },
    { id: 5, color: "green", code: "#00CD15" },
    { id: 6, color: "lightBlue", code: "#00F1F1" },
    { id: 7, color: "blue", code: "#4698F0" },
    { id: 8, color: "darkBlue", code: "#3300FF" },
    { id: 9, color: "purple", code: "#8000FF" },
    { id: 10, color: "pink", code: "#FF00D6" },
    { id: 11, color: "darkGrey", code: "#627384" },
    { id: 12, color: "grey", code: "#AEAEAE" },
    { id: 13, color: "lightGrey", code: "#DFDFDF" },
  ],
  selectedColorHandler,
}) {
  const [selectedColor, setSelectedColor] = useState("");

  function changeColorHandler(color) {
    selectedColorHandler(color);
    setSelectedColor(color);
  }

  return (
    <div className="puk-colors">
      {colors?.map((el) => {
        return (
          <div
            key={el?.id}
            className="puk-colors-item"
            style={{
              borderColor: el.code === selectedColor ? el.code : "transparent",
            }}
            onClick={() => changeColorHandler(el.code)}>
            <div
              className="puk-colors-item__color"
              style={{ background: el.code }}
            />
          </div>
        );
      })}
    </div>
  );
}
