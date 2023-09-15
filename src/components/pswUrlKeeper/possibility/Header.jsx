import React from "react";

import EditIcon from "../../../assets/images/icons/edit-icon.png";
import KeyIcon from "../../../assets/images/icons/key-icon.png";
import FolderIcon from "../../../assets/images/icons/folder-icon.png";
import SearchIcon from "../../../assets/images/icons/search-icon.png";

import "../../../assets/styles/components/pswUrlKeeper/possibility/Header.css";

export default function Header() {
  return (
    <div className="puk-possibility-header">
      <div className="puk-possibility-header-icons">
        <img src={FolderIcon} alt="folder" />
        <img src={KeyIcon} alt="key" />
        <img src={EditIcon} alt="edit" />
        <img src={SearchIcon} alt="search" />
      </div>
    </div>
  );
}
