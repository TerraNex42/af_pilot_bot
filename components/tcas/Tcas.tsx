import React, { createContext, useContext, useState } from "react";
import TcasSearch from "./TcasForm";
import { Separator } from "../ui/separator";
import Radar from "./Radar";
import List from "./List";


function Tcas() {
  return (
    <div className="flex flex-col p-1">
      <TcasSearch />
      <Separator className="my-4" />
      <Radar className="place-self-center" />
      <Separator className="my-4" />
      <List />
    </div>
  );
}

export default Tcas;
