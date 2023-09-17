import React, { useState } from "react";

import Header from "./Header";
import AddButton from "../../UI/addButton";
import SubsectionModal from "../../UI/subsectionModal/Index";

import FolderItemIcon from "../../../assets/images/icons/folder-item-icon.png";
import DotsIcon from "../../../assets/images/icons/dots-icon.png";

import "../../../assets/styles/components/pswUrlKeeper/possibility/Index.css";

export default function Possibility({
  folders,
  activeFolder,
  setActiveFolder,
}) {
  const [subsectionVisible, setSubsectionVisible] = useState(false);
  const [subsectionPosition, setSubsectionPosition] = useState([]);

  function openSubsectionHandler(e) {
    setSubsectionVisible(true);
    setSubsectionPosition([e.clientX, e.clientY]);
  }

  function removeFolderHandler(folder) {
    // Write logic then
    setSubsectionVisible(false);
  }

  function addChapterHandler(folder) {
    // Write logic then
    setSubsectionVisible(false);
  }

  function addPasswordHandler(folder) {
    // Write logic then
    setSubsectionVisible(false);
  }

  function addFavoriteHandler(folder) {
    // Write logic then
    setSubsectionVisible(false);
  }

  return (
    <div className="puk-possibility">
      <Header activeFolder={activeFolder} />

      {folders.length === 0 ? (
        <div className="add-folder">
          <AddButton>Добавить папку</AddButton>
        </div>
      ) : (
        <div className="puk-possibility-folder-list">
          {folders.map((folder) => {
            {
              /* change the parameters and write the correct parameters */
            }
            return (
              <div
                key={folder?._id}
                className={`puk-possibility-folder-item ${
                  folder._id === activeFolder?._id &&
                  "puk-possibility-folder-item--active"
                }`}>
                <div
                  className="puk-possibility-folder-item-title"
                  onClick={() => setActiveFolder(folder)}>
                  <img
                    src={folder?.iconSrc || FolderItemIcon}
                    alt="folder-item"
                    className="puk-possibility-folder-item__icon"
                  />
                  <p className="puk-possibility-folder-item__name">
                    {folder.name}
                  </p>
                </div>

                {folder._id === activeFolder?._id && (
                  <img
                    src={DotsIcon}
                    alt="folder-item"
                    className="puk-possibility-folder-item__dots"
                    onClick={openSubsectionHandler}
                  />
                )}

                <SubsectionModal
                  visible={subsectionVisible}
                  setVisible={setSubsectionVisible}
                  position={subsectionPosition}>
                  <p
                    className="puk-possibility-subsection__item"
                    onClick={() => removeFolderHandler(folder)}>
                    Удалить папку
                  </p>
                  <div className="puk-possibility-subsection__line"></div>

                  <p
                    className="puk-possibility-subsection__item"
                    onClick={() => addChapterHandler(folder)}>
                    Добавить подраздел
                  </p>
                  <div className="puk-possibility-subsection__line"></div>

                  <p
                    className="puk-possibility-subsection__item"
                    onClick={() => addPasswordHandler(folder)}>
                    Добавить пароль
                  </p>
                  <div className="puk-possibility-subsection__line"></div>

                  <p
                    className="puk-possibility-subsection__item"
                    onClick={() => addFavoriteHandler(folder)}>
                    Добавить в избранное
                  </p>
                </SubsectionModal>
              </div>
            );
            {
              /* ************************* */
            }
          })}
        </div>
      )}
    </div>
  );
}
