import { Flight } from "@/types/flightradarapi";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { z } from "zod";

const FlightSchema = z.object({
  callsign: z.string(),
  aircraftType: z.string(),
  origin: z.string(),
  destination: z.string(),
  altitude: z.string(),
  heading: z.number(),
});

type State = {
  aircraft: z.infer<typeof FlightSchema>[];
};

export type SetAircraftType = (aircraft: z.infer<typeof FlightSchema>) => void;

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
