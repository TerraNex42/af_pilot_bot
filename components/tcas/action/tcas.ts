"use server";

import { Dispatch, SetStateAction } from "react";
import { getCurrentFlights, getFlightsAround } from "../../../lib/FR24/FR24";
import { Flight } from "flightradarapi";
import { z } from "zod";
import { flightSchema } from "@/lib/FR24/Shema";

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
      return JSON.stringify({
        message:
          "Invalid format. Please use a valid callsign code (e.g., XXXYYY(Y) or XXXYYNN).",
      });
    } else {
      airline = callsignMatch.toString().toUpperCase().slice(0, 3);
      console.log("airline :" + airline);
      callsign = callsignMatch.toString().toUpperCase();
      console.log("callsign :" + callsign);
    }

    flights = await getCurrentFlights(airline);
    searchFlight = flights.filter((f) => f.callsign === callsign)[0];
    if (searchFlight === undefined) {
      return JSON.stringify({ message: "No flights found" });
    }
    //Data - 1 to fix out of rendering aircraft
    let boundFlight = await getFlightsAround(searchFlight, data.range - 1);
    boundFlight = sortFlightDistance(boundFlight, searchFlight);
    if (boundFlight.length > 0) {
      return createAircraftJson(boundFlight, searchFlight, data.range);
    }
  } catch (err) {
    console.log(err);
  }
}

export default tcas;

function createAircraftJson(
  flights: Flight[],
  searchFlight: Flight,
  range: number
) {
  let listAircraft: z.infer<typeof flightSchema>[] = flights.map((flight) => {
    return {
      id: flight.id,
      callsign: flight.callsign as string,
      aircraftType: flight.aircraftCode as string,
      origin: flight.originAirportIata as string,
      destination: flight.destinationAirportIata as string,
      altitude: flight.getAltitude(),
      speed: flight.getGroundSpeed(),
      heading: flight.getHeading(),
      positionRadar: positionOnGrid(
        flight.latitude,
        flight.longitude,
        searchFlight,
        range
      ),
      toggleState: false,
    };
  });
  console.log(listAircraft);
  listAircraft = listAircraft.filter((aircraft) => {
    return (
      aircraft.positionRadar.x < 270 &&
      aircraft.positionRadar.x > 0 &&
      aircraft.positionRadar.y < 270 &&
      aircraft.positionRadar.y > 0
    );
  });
  const jsonList = JSON.stringify(listAircraft);
  console.log(jsonList);
  return jsonList;
}

function rangeToGrid(range: number): number {
  return (1 / range) * 60 * 150;
}

function positionOnGrid(
  lat: number,
  lon: number,
  originAc: Flight,
  range: number
): { x: number; y: number } {
  const scale: number = rangeToGrid(range);
  const relX = originAc.longitude - lon;
  const relY = originAc.latitude - lat;
  const rotateX =
    relX * Math.cos(originAc.heading) - relY * Math.sin(originAc.heading);
  const rotateY =
    relX * Math.sin(originAc.heading) + relY * Math.cos(originAc.heading);
  console.log(`position X : ${relX}`);
  console.log(`position Y : ${relY}`);
  console.log(`scale  : ${scale}`);
  console.log(`position rotated X : ${rotateX}`);
  console.log(`position rotated Y : ${rotateY}`);

  return {
    x: scale * rotateX + 134 - 30,
    y: scale * rotateY + 137 - 30,
  };
}

function sortFlightDistance(flights: Flight[], searchFlight: Flight): Flight[] {
  if (flights === undefined || searchFlight === undefined) return [];
  let arrDistance: number[][] = flights.map((flight, index) => [
    flight.getDistanceFrom(searchFlight) / 1.852,
    index,
  ]);
  console.log(arrDistance);
  arrDistance.sort((a, b) => a[0] - b[0]);
  console.log(arrDistance);
  const returnArray = arrDistance.map((index) => flights[index[1]]);
  console.log(returnArray);
  return returnArray;
}
