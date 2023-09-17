import React, { useEffect, useState } from "react";

import Modal from "../UI/modal/Index";
import Colors from "./Colors";
import FolderIcons from "./FolderIcons";
import Chapter from "./Chapter";

import TrashIcon from "../../assets/images/icons/trash-icon.png";
import CloseIcon from "../../assets/images/icons/close-icon.png";

import "../../assets/styles/components/pswUrlKeeper/FolderForm.css";

export default function FolderForm({ visible, setVisible, activeFolder }) {
  const [folderName, setFolderName] = useState("");
  const [about, setAbout] = useState("");
  const [folderColor, setFolderColor] = useState("");
  const [folderIcon, setFolderIcon] = useState("");

  useEffect(() => {
    // write the logic there, get the folder from the link or the activeFolder from the props....
    // setFolderName(folder.folderName)
    // setAbout(folder.about)
    //......
    if (activeFolder.name) {
      setFolderName(activeFolder.name);
    }
    if (activeFolder.about) {
      setAbout(activeFolder.about);
    }
    //....
  }, [visible]);

  function submitHandler(e) {
    e.preventDefault();
    // write post link logic
    // if success setVisible(false)
  }

  function removeFolderHandler() {
    // write delete link logic
  }

  function selectedColorHandler(color) {
    setFolderColor(color);
  }

  function selectedFolderIconHandler(icon) {
    setFolderIcon(icon);
  }

  return (
    <Modal visible={visible}>
      <div className="puk-folder-form-header">
        <p className="puk-folder-form-header__title">Изменить папку</p>

        <div className="puk-folder-form-header-btns">
          <img
            src={TrashIcon}
            alt="trash"
            className="puk-folder-form-header-btns__icon"
            onClick={() => removeFolderHandler()}
          />

          <img
            src={CloseIcon}
            alt="close"
            className="puk-folder-form-header-btns__icon"
            onClick={() => setVisible(false)}
          />
        </div>
      </div>

      <form className="puk-folder-form">
        <label className="puk-folder-form-block">
          <span>Название:</span>
          <input
            type="text"
            value={folderName}
            className="puk-folder-form__input"
            onChange={(e) => setFolderName(e.target.value)}
          />
        </label>

        <div className="puk-folder-form-block">
          <span className="puk-folder-form-block--chapter">Раздел:</span>
          <div className="puk-folder-form__folders">
            <Chapter activeFolder={activeFolder} setVisible={setVisible} />
          </div>
        </div>

        <label className="puk-folder-form-block puk-folder-form-block--textarea">
          <span>Описание:</span>
          <textarea
            value={about}
            className="puk-folder-form__textarea"
            onChange={(e) => setAbout(e.target.value)}
          />
        </label>

        <div className="puk-folder-form-block">
          <span>Цвет папки:</span>
          <div className="puk-folder-form__colors">
            <Colors selectedColorHandler={selectedColorHandler} />
          </div>
        </div>

        <div className="puk-folder-form-block">
          <span>Иконка папки:</span>
          <div className="puk-folder-form__folders">
            <FolderIcons
              selectedFolderIconHandler={selectedFolderIconHandler}
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={submitHandler}
          className="puk-folder-form-button puk-folder-form-button--blue">
          Сохранить
        </button>

        <button
          onClick={() => setVisible(false)}
          className="puk-folder-form-button puk-folder-form-button--grey">
          Отменить
        </button>
      </form>
    </Modal>
  );
}
