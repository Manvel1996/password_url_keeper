import React, { useContext, useEffect, useState } from "react";

import SearchInput from "../../UI/searchInput/Index";

import { SearchContext } from "../Index";

import EditIcon from "../../../assets/images/icons/edit-icon.png";
import KeyIcon from "../../../assets/images/icons/key-icon.png";
import FolderIcon from "../../../assets/images/icons/folder-icon.png";
import SearchIcon from "../../../assets/images/icons/search-icon.png";

import "../../../assets/styles/components/pswUrlKeeper/possibility/Header.css";

export default function Header({ openModalHandler }) {
  const [searchActive, setSearchActive] = useState(false);
  const [warning, setWarning] = useState(false);

  const [search, setSearch, filtredFolders] = useContext(SearchContext);

  useEffect(() => {
    if (filtredFolders.length === 0 && search.length > 0) {
      setWarning(true);
    } else setWarning(false);
  }, [search]);

  return (
    <div className="puk-possibility-header">
      <div className="puk-possibility-header-icons">
        {searchActive ? (
          <SearchInput
            placeholder="Поиск..."
            value={search}
            warning={warning}
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
              onClick={openModalHandler}
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
