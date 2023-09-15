import React, { useState } from "react";

import Header from "./Header";
import AddButton from "../../UI/addButton";

import FolderItemIcon from "../../../assets/images/icons/folder-item-icon.png";
import DotsIcon from "../../../assets/images/icons/dots-icon.png";

import "../../../assets/styles/components/pswUrlKeeper/possibility/Index.css";

export default function Possibility({
  folders,
  activeFolder,
  setActiveFolder,
}) {
  return (
    <div className="puk-possibility">
      <Header />

      {folders.length === 0 ? (
        <div className="add-folder">
          <AddButton>Добавить папку</AddButton>
        </div>
      ) : (
        <div className="folder-list">
          {folders.map((folder) => {
            return (
              <div
                key={folder._id}
                className={
                  folder._id === activeFolder?._id
                    ? "folder-item folder-item--active"
                    : "folder-item"
                }
                onClick={() => setActiveFolder(folder)}>
                <div className="folder-item-title">
                  <img
                    src={FolderItemIcon}
                    alt="folder-item"
                    className="folder-item__icon"
                  />
                  <p className="folder-item__name">{folder.name}</p>
                </div>

                {folder._id === activeFolder?._id && (
                  <img
                    src={DotsIcon}
                    alt="folder-item"
                    className="folder-item__dots"
                  />
                )}
                {/* change the parameters and write the correct parameters */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
