import React, { useState } from "react";

import EditIcon from "../../../assets/images/icons/edit-icon.png";
import KeyIcon from "../../../assets/images/icons/key-icon.png";
import FolderIcon from "../../../assets/images/icons/folder-icon.png";
import SearchIcon from "../../../assets/images/icons/search-icon.png";

import "../../../assets/styles/components/pswUrlKeeper/possibility/Header.css";

export default function Header() {
  const [searchActive, setSearchActive] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="puk-possibility-header">
      <div className="puk-possibility-header-icons">
        {searchActive ? (
          <input
            type="search"
            placeholder="Поиск..."
            className="puk-possibility-header__search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          <>
            <img
              src={FolderIcon}
              alt="folder"
              className="puk-possibility-header-icons__item"
            />
            <img
              src={KeyIcon}
              alt="key"
              className="puk-possibility-header-icons__item"
            />
            <img
              src={EditIcon}
              alt="edit"
              className="puk-possibility-header-icons__item"
            />
          </>
        )}

        <img
          src={SearchIcon}
          alt="search"
          className="puk-possibility-header-icons__item"
          onClick={() => setSearchActive(!searchActive)}
        />
      </div>
    </div>
  );
}
