import { Flight } from "@/types/flightradarapi";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { z } from "zod";
import { flightSchema } from "@/lib/FR24/Shema";

type State = {
  aircraft: z.infer<typeof flightSchema>[];
};

export type SetAircraftType = (aircraft: z.infer<typeof flightSchema>) => void;

type Actions = {
  addAircraft: SetAircraftType;
  reset: () => void;
}

const initialState: State = {
  aircraft: [],
};

const useAircraftStore = create<State & Actions>()(
  devtools(
  immer((set) => ({
    ...initialState,
    addAircraft: (aircraft) =>
      set((state) => {
        state.aircraft.push(aircraft);
      }),
    reset: () => set(initialState),
  }))
));



export default useAircraftStore;
