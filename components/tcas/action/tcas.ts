"use server";

import { Dispatch, SetStateAction } from "react";
import { getCurrentFlights, getFlightsAround } from "../../../lib/FR24/FR24";
import { Flight } from "flightradarapi";
import { z } from "zod";

const FlightSchema = z.object({
  callsign: z.string(),
  aircraftType: z.string(),
  origin: z.string(),
  destination: z.string(),
  altitude: z.string(),
  heading: z.number(),
});

const formSchema = z.object({
  callsign: z.string().min(4, {
    message: "Callsign should have the next form XXXZZZ(ZZ)",
  }),
  range: z.number().safe().min(5).max(30),
});

async function tcas(data: z.infer<typeof formSchema>) {
  let airline: string = "";
  let callsign: string = "";
  let flights: Flight[];
  let searchFlight: Flight;

  try {
    const callsignRegex = /[A-Za-z]{3}\S+$/;
    const callsignMatch = data.callsign.match(callsignRegex);
    if (!callsignMatch) {
      return "message : Invalid format. Please use a valid callsign code (e.g., XXXYYY(Y) or XXXYYNN).";
    } else {
      airline = callsignMatch.toString().toUpperCase().slice(0, 3);
      console.log("airline :" + airline);
      callsign = callsignMatch.toString().toUpperCase();
      console.log("callsign :" + callsign);
    }

    flights = await getCurrentFlights(airline);
    console.log("list of flight from that airlines : \n" + flights);
    searchFlight = flights.filter((f) => f.callsign === callsign)[0];
    if (searchFlight === undefined) {
      return "message : No flight found";
    }
    const boundFlight = await getFlightsAround(searchFlight, data.range);
    if (boundFlight.length > 0) {
      console.log(boundFlight);
      return createAircraftJson(boundFlight);
    }
  } catch (err) {
    console.log(err);
  }
}

export default tcas;

function createAircraftJson(flights: Flight[]) {
  const listAircraft = flights.map((flight) => {
    return {
      callsign: flight.callsign,
      aircraftType: flight.aircraftModel,
      origin: flight.originAirportIata,
      destination: flight.destinationAirportIata,
      altitude: flight.altitude,
      heading: flight.heading,
    };
  });
  const jsonList = JSON.stringify(listAircraft);
  return jsonList;
}
