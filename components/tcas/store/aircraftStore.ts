import { Flight } from "@/types/flightradarapi";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { z } from "zod";
import { flightSchema } from "@/lib/FR24/Shema";

type State = {
  aircraft: z.infer<typeof flightSchema>[];
  toggletItem: string;
};

export type SetAircraftType = (aircraft: z.infer<typeof flightSchema>) => void;
export type toggleState = (aircraft: z.infer<typeof flightSchema>) => void;

type Actions = {
  addAircraft: SetAircraftType;
  toggleState: toggleState;
  reset: () => void;
};

const initialState: State = {
  aircraft: [],
  toggletItem: "",
};

const useAircraftStore = create<State & Actions>()(
  devtools(
    immer((set) => ({
      ...initialState,
      addAircraft: (aircraft) =>
        set((state) => {
          state.aircraft.push(aircraft);
        }),
      toggleState: (aircraft) =>
        set((state) => {
          if (state.toggletItem === aircraft.id) {
            state.toggletItem = "";
          } else {
            state.toggletItem = aircraft.id;
          }
        }),
      reset: () => set(initialState),
    }))
  )
);

export default useAircraftStore;
