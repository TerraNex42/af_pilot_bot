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
export type toggleState = (id: string) => void;

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
      toggleState: (id) =>
        set((state) => {
          if (state.toggletItem === id) {
            state.toggletItem = "";
          } else {
            state.toggletItem = id;
          }
        }),
      reset: () => set(initialState),
    }))
  )
);

export default useAircraftStore;
