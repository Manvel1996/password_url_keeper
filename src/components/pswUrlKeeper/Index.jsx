import React, { createContext, useMemo, useState } from "react";

import Possibility from "./possibility/Index";
import Main from "./main";
import Details from "./details";

import { searchFilter } from "../../utils/helper";

import "../../assets/styles/components/pswUrlKeeper/Index.css";

export const SearchContext = createContext();

export default function () {
  // Example array remove it
  const [folders, setFolders] = useState([
    {
      _id: 1,
      name: "React",
      iconSrc: "",
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
      iconSrc: "",
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
  const [search, setSearch] = useState("");

  //  Logic get api add search parametr or this
  const filtredFolders = useMemo(
    () => searchFilter(folders, search),
    [folders, search]
  );

  //    Logic Get api ...... then   setFolders(data)
  // useEffect(() => {
  //   try {
  //   } catch (error) {
  //   }
  // }, []);

  return (
    <div className="psw-url-keeper">
      <SearchContext.Provider value={[search, setSearch, filtredFolders]}>
        <Possibility
          folders={filtredFolders}
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
          search={search}
          setSearch={setSearch}
        />
      </SearchContext.Provider>

      <Main />
      <Details />
    </div>
  );
}
