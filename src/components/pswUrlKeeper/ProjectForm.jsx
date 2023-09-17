import React, { useEffect, useState } from "react";

import Modal from "../UI/modal/Index";
import Colors from "./Colors";

import TrashIcon from "../../assets/images/icons/trash-icon.png";
import CloseIcon from "../../assets/images/icons/close-icon.png";
import WarningTrangleIcon from "../../assets/images/icons/warning-red-triangle-icon.png";
import UpdateleIcon from "../../assets/images/icons/update-icon.png";
import VisiblePasswordIcon from "../../assets/images/icons/visible-password-icon.png";
import InvisblePasswordIcon from "../../assets/images/icons/invisible-password-icon.png";

import "../../assets/styles/components/pswUrlKeeper/ProjectForm.css";

export default function ProjectForm({ visible, setVisible }) {

  const [projectName, setProjectName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [projectUrl, setProjecturl] = useState("");
  const [comment, setComment] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleRepeatPassword, setVisibleRepeatPassword] = useState(false);

  useEffect(() => {
    // write the logic there, get the project from the link or the project from the props....
    // setProjectName(project.projectName)
    // setLogin(project.login)
    //......
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    // write post link logic 
    // if success setVisible(false)
  }

  function removeProjectHandler() {
    // write delete link logic
  }

  function resetPasswordHandler() {
    setPassword("");
    setRepeatPassword("");
  }

  function selectedColorHandler(color) {
    setPasswordColor(color);
  }
  return (
    <Modal visible={visible}>
      <div className="puk-project-form-header">
        <p className="puk-project-form-header__title">Изменить пароль</p>

        <div className="puk-project-form-header-btns">
          <img
            src={TrashIcon}
            alt="trash"
            className="puk-project-form-header-btns__icon"
            onClick={() => removeProjectHandler()}
          />

          <img
            src={CloseIcon}
            alt="close"
            className="puk-project-form-header-btns__icon"
            onClick={() => setVisible(false)}
          />
        </div>
      </div>

      <form className="puk-project-form">
        <label className="puk-project-form-block">
          <span>Название:</span>
          <input
            type="text"
            value={projectName}
            className="puk-project-form__input"
            onChange={(e) => setProjectName(e.target.value)}
          />
        </label>

        <label className="puk-project-form-block">
          <span>Логин:</span>
          <input
            type="text"
            value={login}
            className="puk-project-form__input"
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>

        <label className="puk-project-form-block">
          <span>Пароль:</span>
          <input
            type={visiblePassword ? "text" : "password"}
            value={password}
            className="puk-project-form__input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={visiblePassword ? InvisblePasswordIcon : VisiblePasswordIcon}
            alt="eye"
            className="puk-project-form-block-password-eye"
            onClick={() => setVisiblePassword(!visiblePassword)}
          />
        </label>

        <label className="puk-project-form-block">
          <span>Повторите:</span>
          <input
            type={visibleRepeatPassword ? "text" : "password"}
            value={repeatPassword}
            className="puk-project-form__input"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <img
            src={
              visibleRepeatPassword ? InvisblePasswordIcon : VisiblePasswordIcon
            }
            alt="eye"
            className="puk-project-form-block-password-eye"
            onClick={() => setVisibleRepeatPassword(!visibleRepeatPassword)}
          />
        </label>

        {/* Change the logic and write the correct logic*/}
        {password.length !== 0 && password.length < 8 && (
          <div className="puk-project-form-info">
            <p className="puk-project-form-info__title">Сложность:</p>

            <div className="puk-project-form-info-wrapper">
              <div className="puk-project-form-info-wrapper-warning">
                <img
                  src={WarningTrangleIcon}
                  alt="warning"
                  className="puk-project-form-info-wrapper-warning__icon"
                />
                <p>Слабый пароль</p>
              </div>

              <div
                className="puk-project-form-info-wrapper-reset"
                onClick={resetPasswordHandler}>
                <img src={UpdateleIcon} alt="update" />
                <p>Придумать пароль</p>
              </div>
            </div>
          </div>
        )}

        <label className="puk-project-form-block">
          <span>URL:</span>
          <input
            type="url"
            value={projectUrl}
            className="puk-project-form__input"
            onChange={(e) => setProjecturl(e.target.value)}
          />
        </label>

        <div className="puk-project-form__line" />

        <label className="puk-project-form-block puk-project-form-block--textarea">
          <span>Комментарий:</span>
          <textarea
            value={comment}
            className="puk-project-form__textarea"
            onChange={(e) => setComment(e.target.value)}
          />
        </label>

        <div className="puk-project-form-block">
          <span>Цвет пароля:</span>
          <div className="puk-project-form__colors">
            <Colors selectedColorHandler={selectedColorHandler} />
          </div>
        </div>

        <button
          type="submit"
          onClick={submitHandler}
          className="puk-project-form-button puk-project-form-button--blue">
          Сохранить
        </button>

        <button
          onClick={() => setVisible(false)}
          className="puk-project-form-button puk-project-form-button--grey">
          Отменить
        </button>
      </form>
    </Modal>
  );
}
