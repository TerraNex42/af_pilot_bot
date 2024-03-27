import { z } from "zod";

export const flightSchema = z.object({
  callsign: z.string(),
  aircraftType: z.string(),
  origin: z.string(),
  destination: z.string(),
  altitude: z.string(),
  speed: z.string(),
  heading: z.string(),
  positionRadar: z.object({
    x: z.number(),
    y: z.number(),
  }),
});
