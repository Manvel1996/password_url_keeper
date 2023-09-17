import React from "react";

export default function ChapterItem({ arr }) {
  return (
    <>
      {arr?.map((el) => {
        if (el?.folders.length) {
          return <div className="puk-chapter-item"><p>{el.name}</p></div>;
        }else return <div className="puk-chapter-item">^^<p>{el.name}</p></div>
      })}
    </>
  );
}
