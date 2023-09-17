import "./Index.css";

export default function SubsectionModal({
  children,
  position,
  visible,
  setVisible,
}) {
  const left = position[0] - 200 || -200;
  const top = position[1] + 30 || -200;

  return (
    <div
      className={`subsection-modal ${visible && "subsection-modal--active"}`}
      onClick={() => setVisible(false)}>
      <div
        className={`subsection-modal-content  ${
          visible && "subsection-modal--active"
        }`}
        style={{ left, top }}
        onClick={(e) => e.stopPropagation()}>
        <div className="subsection-modal-content__triangle"></div>
        {children}
      </div>
    </div>
  );
}
