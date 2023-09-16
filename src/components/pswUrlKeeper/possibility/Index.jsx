import React, { useState } from "react";

import Header from "./Header";
import ProjectForm from "../ProjectForm";
import AddButton from "../../UI/addButton";

import FolderItemIcon from "../../../assets/images/icons/folder-item-icon.png";
import DotsIcon from "../../../assets/images/icons/dots-icon.png";

import "../../../assets/styles/components/pswUrlKeeper/possibility/Index.css";

export default function Possibility({
  folders,
  activeFolder,
  setActiveFolder,
}) {
  const [visible, setVisible] = useState(false);

  function openModalHandler() {
    setVisible(!visible);
  }

  return (
    <>
      <div className="puk-possibility">
        <Header openModalHandler={openModalHandler} />

        {folders.length === 0 ? (
          <div className="add-folder">
            <AddButton>Добавить папку</AddButton>
          </div>
        ) : (
          <div className="puk-possibility-folder-list">
            {folders.map((folder) => {
              return (
                <div
                  key={folder._id}
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
                    />
                  )}
                  {/* change the parameters and write the correct parameters */}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <ProjectForm visible={visible} setVisible={setVisible} />
    </>
  );
}
