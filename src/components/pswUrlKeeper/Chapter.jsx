import React, { useEffect, useMemo, useState } from "react";

import SearchInput from "../UI/searchInput/Index";

import { searchFilter } from "../../utils/helper";

import FolderChapterIcon from "../../assets/images/icons/folder-chapter-icon.png";
import CloseIcon from "../../assets/images/icons/close-icon.png";

import "../../assets/styles/components/pswUrlKeeper/Chapter.css";
import ChapterItem from "./ChapterItem";

export default function Chapter({ activeFolder }) {
  //
  // the code is incomplete. I do not understand what is required to display ․․․․․․․․․․․․․․․․
  //
  //
  //
  const [openChapter, setOpenChapter] = useState(false);
  const [search, setSearch] = useState("");
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (filtredFolders?.length === 0 && search?.length > 0) {
      setWarning(true);
    } else setWarning(false);
  }, [search]);

  const filtredFolders = useMemo(
    () => searchFilter(activeFolder?.folders, search),
    [search, activeFolder]
  );

  return (
    <div className="puk-chapter">
      <input
        disabled
        value={activeFolder?.folderName}
        placeholder="Добавить в..."
        className="puk-chapter__input"
      />
      <img
        src={activeFolder?.iconSrc || FolderChapterIcon}
        alt="folder-icon"
        className="puk-chapter-folder-icon"
        onClick={() => setOpenChapter(!openChapter)}
      />

      {openChapter && (
        <div className="puk-chapter-content">
          <div className="puk-chapter-content-header">
            <p className="puk-chapter-content-header__title">Выбрать раздел</p>
            <img
              src={CloseIcon}
              alt="close"
              className="puk-chapter-content-header__icon"
              onClick={() => setOpenChapter(false)}
            />
          </div>

          <div className="puk-chapter-content-wrapper">
            <SearchInput
              placeholder={"Поиск по названию"}
              warning={warning}
              searIcon={true}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="puk-chapter-content__line" />

            {/* I don't understand what folders are there */}

            <ChapterItem filtredFolders={filtredFolders} />

            {/* ****************************************** */}

            <div className="puk-chapter-content-buttons">
              <button className="puk-chapter-content__button puk-chapter-content__button--blue">
                Выбрать
              </button>
              <button
                className="puk-chapter-content__button puk-chapter-content__button--grey"
                onClick={() => setOpenChapter(false)}>
                Отменить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
