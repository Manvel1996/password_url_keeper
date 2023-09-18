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
      about: "React is a best",
      folders: [
        {
          _id: "b1",
          name: "Hooks",
          iconSrc: "",
          about: "",
          folders: [
            {
              _id: 21,
              name: "Vue111",
              iconSrc: "",
              about: "",
              folders: [],
              files: [
                {
                  _id: "a3",
                  password: "pass4",
                  url: "https//55455454525555..",
                  isfavorite: false,
                },
                {
                  _id: "a4",
                  password: "pass12",
                  url: "https//66241536..",
                  isfavorite: false,
                },
              ],
            },
          ],
          files: [
            {
              _id: "c4",
              password: "c4",
              url: "https//c4",
              isfavorite: true,
            },
            {
              _id: "c51",
              password: "passaac5",
              url: "https//c5",
              isfavorite: true,
            },
          ],
        },
        {
          _id: "b2",
          name: "Props",
          iconSrc: "",
          about: "",
          folders: [],
          files: [],
        },
      ],
      files: [
        {
          _id: "a1",
          fileImg: "",
          password: "pass",
          url: "https//5555..",
          isfavorite: true,
        },
        {
          _id: "a2",
          fileImg: "",
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
      about: "",
      folders: [],
      files: [
        {
          _id: "a3",
          fileImg:"",
          password: "pass4",
          url: "https//55455454525555..",
          isfavorite: false,
        },
        {
          _id: "a4",
          fileImg:"",
          password: "pass12",
          url: "https//66241536..",
          isfavorite: false,
        },
      ],
    },
  ]);

  const [activeFolder, setActiveFolder] = useState({});
  const [search, setSearch] = useState("");

  //    Logic Get api ...... then   setFolders(data)
  // useEffect(() => {
  //   try {
  //   } catch (error) {
  //   }
  // }, []);

  //  Logic get api add search parametr or this
  const filtredFolders = useMemo(
    () => searchFilter(folders, search),
    [folders, search]
  );

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

      <Main activeFolder={activeFolder} />
      <Details />
    </div>
  );
}
