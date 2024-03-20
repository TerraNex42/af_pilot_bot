import React, { createContext, useContext, useState } from "react";
import TcasSearch from "./TcasForm";
import { Separator } from "../ui/separator";
import Radar from "./Radar";
import { Flight } from "@/types/flightradarapi";
import List from "./List";



function Tcas() {
  return (
    <div>
        <TcasSearch />
        <Separator className="my-4" />
        <Radar />
        <Separator className="my-4" />
        <List />
    </div>
  );
}

export default Tcas;
