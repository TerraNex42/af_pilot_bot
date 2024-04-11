import React, { createContext, useContext, useState } from "react";
import TcasSearch from "./TcasForm";
import { Separator } from "../ui/separator";
import Radar from "./Radar";
import List from "./List";
import useFormStore from "./store/formStore";
import { cn } from "@/lib/utils";
import { Alert } from "./Alert";


function Tcas() {
  const isSubmitting = useFormStore((state) => state.isLoading)
  const error = useFormStore((state) => state.error)
  return (
    <div
      className={cn(
        "flex flex-col p-1",
        isSubmitting || error.isError ? "blur-sm" : "blur-none"
      )}
    >
      <Alert/>
      <TcasSearch />
      <Separator className="my-4" />
      <Radar className="place-self-center" />
      <Separator className="my-4" />
      <List />
    </div>
  );
}

export default Tcas;
