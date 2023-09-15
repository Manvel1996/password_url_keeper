import React, { useState } from "react";

import Possibility from "./possibility";
import Main from "./main";
import Details from "./details";

import "../../assets/styles/components/pswUrlKeeper/Index.css";

export default function () {
  // Example array remove it
  const [folders, setFolders] = useState([
    {
      _id: 1,
      name: "React",
      files: [
        {
          id: "a1",
          password: "pass",
          url: "https//5555..",
          isfavorite: false,
        },
        {
          id: "a2",
          password: "pss1",
          url: "https//666sadasasd..",
          isfavorite: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Vue",
      files: [
        {
          id: "a3",
          password: "pass4",
          url: "https//55455454525555..",
          isfavorite: false,
        },
        {
          id: "a4",
          password: "pass12",
          url: "https//66241536..",
          isfavorite: false,
        },
      ],
    },
  ]);

  const [activeFolder, setActiveFolder] = useState({});

  // useEffect(() => {
  //   try {
  //    Logic Get api ...... then   setFolders(data)
  //   } catch (error) {
  //   }
  // }, []);

  return (
    <div className="psw-url-keeper">
      <Possibility
        folders={folders}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
      />
      <Main />
      <Details />
    </div>
  );
}
