import React from "react";

import Possibility from "./possibility";
import Main from "./main";
import Details from "./details";
  
import "../../assets/styles/components/pswUrlKeeper/Index.css"

export default function () {
  return (
    <div className="psw-url-keeper">
      <Possibility />
      <Main />
      <Details />
    </div>
  );
}
