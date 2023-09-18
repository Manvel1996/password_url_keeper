import React, { useMemo, useState } from "react";

import AddButton from "../../UI/addButton";
import SubsectionModal from "../../UI/subsectionModal/Index";
import { favoriteAndSortFilter } from "../../../utils/helper";

import FillStarIcon from "../../../assets/images/icons/fill-star-icon.png";
import StarIcon from "../../../assets/images/icons/star-icon.png";
import ArrowVectorIcon from "../../../assets/images/icons/arrow-vector-icon.png";
import DefaultImgIcon from "../../../assets/images/icons/default-img-icon.png";
import DotsIcon from "../../../assets/images/icons/dots-icon.png";

import "../../../assets/styles/components/pswUrlKeeper/main/Index.css";

export default function Main({ activeFolder }) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [sortByNameUp, setSortByNameUp] = useState(true);
  const [activeFile, setActiveFile] = useState({});

  const [subsectionVisible, setSubsectionVisible] = useState(false);
  const [subsectionPosition, setSubsectionPosition] = useState([]);

  const filtredFiles = useMemo(
    () =>
      favoriteAndSortFilter(activeFolder?.files, showFavorites, sortByNameUp),
    [showFavorites, activeFolder?.files, sortByNameUp]
  );

  function openSubsectionHandler(e) {
    setSubsectionVisible(true);
    setSubsectionPosition([e.clientX, e.clientY]);
  }

  return (
    <div className="puk-main">
      <div className="puk-main-header">
        <p
          className="puk-main-header-title"
          onClick={() => setSortByNameUp(!sortByNameUp)}>
          <span>Название</span>
          <img
            style={{
              marginLeft: "5px",
              transform: !sortByNameUp && "rotate(180deg)",
            }}
            src={ArrowVectorIcon}
            alt="arrow"
          />
        </p>

        <p className="puk-main-header__url">URL</p>

        <img
          className="puk-main-header__star"
          alt="star"
          src={showFavorites ? FillStarIcon : StarIcon}
          onClick={() => setShowFavorites(!showFavorites)}
        />
      </div>

      <div className="puk-main-list">
        {activeFolder?.files?.length > 0 ? (
          filtredFiles?.map((el) => (
            <div
              key={el?._id}
              className={`puk-main-item ${
                el?._id === activeFile?._id && "puk-main-item--active"
              }`}>
              <div
                className="puk-main-item-info"
                onClick={() => setActiveFile(el)}>
                <img
                  src={el?.iconSrc || DefaultImgIcon}
                  alt="img"
                  className="puk-main-item-info__icon"
                />
                <p>{el?.password}</p>
              </div>

              <p
                className="puk-main-item__url"
                onClick={() => setActiveFile(el)}>
                {el?.url}
              </p>

              <div className="puk-main-item-detail">
                {el._id === activeFile?._id && (
                  <img
                    src={DotsIcon}
                    alt="dots"
                    className="puk-main-item-detail__dots"
                    onClick={openSubsectionHandler}
                  />
                )}

                <img
                  className="puk-main-item-detai__star"
                  alt="star"
                  src={el?.isfavorite ? FillStarIcon : StarIcon}
                />
              </div>
              <SubsectionModal
                visible={subsectionVisible}
                setVisible={setSubsectionVisible}
                position={subsectionPosition}>
                <p
                  className="puk-main-subsection__item"
                  onClick={() => removeFolderHandler(folder)}>
                  Удалить папку
                </p>
                <div className="puk-main-subsection__line"></div>

                <p
                  className="puk-main-subsection__item"
                  onClick={() => addChapterHandler(folder)}>
                  Добавить подраздел
                </p>
                <div className="puk-main-subsection__line"></div>

                <p
                  className="puk-main-subsection__item"
                  onClick={() => addPasswordHandler(folder)}>
                  Добавить пароль
                </p>
                <div className="puk-main-subsection__line"></div>

                <p
                  className="puk-main-subsection__item"
                  onClick={() => addFavoriteHandler(folder)}>
                  Добавить в избранное
                </p>
              </SubsectionModal>
            </div>
          ))
        ) : (
          <AddButton>Добавить пароль</AddButton>
        )}
      </div>
    </div>
  );
}
