import React, { useState } from "react";

import FolderIcon1 from "../../assets/images/icons/folder-icon-1.png";
import FolderIcon2 from "../../assets/images/icons/folder-icon-2.png";
import FolderIcon3 from "../../assets/images/icons/folder-icon-3.png";
import FolderIcon4 from "../../assets/images/icons/folder-icon-4.png";
import FolderIcon5 from "../../assets/images/icons/folder-icon-5.png";
import FolderIcon6 from "../../assets/images/icons/folder-icon-6.png";

import "../../assets/styles/components/pswUrlKeeper/FolderIcons.css";

export default function FolderIcons({
  icons = [
    { id: 1, icon: FolderIcon1 },
    { id: 2, icon: FolderIcon2 },
    { id: 3, icon: FolderIcon3 },
    { id: 4, icon: FolderIcon4 },
    { id: 5, icon: FolderIcon5 },
    { id: 6, icon: FolderIcon6 },
  ],
  selectedFolderIconHandler,
}) {
  const [selectedIcon, setSelectedIcon] = useState("");

  function changeIconHandler(icon) {
    selectedFolderIconHandler(icon);
    setSelectedIcon(icon);
  }

  return (
    <div className="puk-folder-icons">
      {icons?.map((el) => {
        return (
          <img
            key={el?.id}
            className="puk-folder-icons-item"
            src={el?.icon}
            alt="folder-icon"
            style={{
              border: el?.icon === selectedIcon && "1px solid black",
            }}
            onClick={() => changeIconHandler(el?.icon)}
          />
        );
      })}
    </div>
  );
}
