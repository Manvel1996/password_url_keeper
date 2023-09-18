import React, { useState } from "react";

import ArrowTopIcon from "../../assets/images/icons/arrow-top-icon.png";
import ArrowBottomIcon from "../../assets/images/icons/arrow-bottom-icon.png";
import FolderChapterIcon from "../../assets/images/icons/folder-chapter-icon.png";

import "../../assets/styles/components/pswUrlKeeper/ChapterItem.css";

export default function ChapterItem({ filtredFolders }) {
  const [openedFolders, setOpenedFolders] = useState({});

  function openIdHandler(id, folders) {
    if (openedFolders[id] === true) {
      const newObj = { ...openedFolders };
      newObj[id] = null;
      setOpenedFolders(newObj);
    } else {
      const newObj = { ...openedFolders };
      newObj[id] = true;
      setOpenedFolders(newObj);
    }
    
    <ChapterItem filtredFolders={folders} />;
  }

  return (
    <div className="puk-chapter-list">
      {filtredFolders?.map((el) => {
        const id = el?._id;
        return (
          <div key={id} className="puk-chapter-item">
            {el?.folders?.length > 0 && (
              <img
                src={
                  openedFolders[id] === true ? ArrowTopIcon : ArrowBottomIcon
                }
                alt="arrow"
                onClick={() => openIdHandler(id, el?.folders)}
              />
            )}
            <img
              src={el?.iconSrc || FolderChapterIcon}
              alt="folder"
              className="puk-chapter-item__folder-icon"
            />
            <p className="puk-chapter-item__name">{el?.name}</p>
          </div>
        );
      })}
    </div>
  );
}
