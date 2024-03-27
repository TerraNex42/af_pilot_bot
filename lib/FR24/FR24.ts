'use server'

import { Flight, FlightRadar24API } from 'flightradarapi';

const frApi = new FlightRadar24API();

async function connect() {
  if (
    typeof process.env.LOGIN === 'string' &&
    typeof process.env.PASSWORD === 'string'
  ) {
    try {
      await frApi.login(process.env.LOGIN, process.env.PASSWORD);
    } catch (err) {
      console.log(err);
      throw new Error('Login or password incorrect');
    }
  }
}

export async function getCurrentFlights(
  airlineIcao: string
): Promise<Flight[]> {
  if (!frApi.isLoggedIn()) {
    try {
      await connect();
    } catch (err) {
      throw new Error('Impossible to connect!');
    }
  }
  try {
    const flightList: Flight[] = await frApi.getFlights(
      airlineIcao,
      undefined,
      undefined,
      undefined,
      false
    );
    return flightList || [];
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch flights');
  }
}

export async function getFlightDetails(flight: Flight): Promise<Flight> {
  if (!frApi.isLoggedIn()) {
    try {
      await connect();
    } catch (err) {
      throw new Error('Impossible to connect!');
    }
  }

  if (frApi.isLoggedIn() && flight) {
    try {
      const returnFlight: Flight = flight;
      const flightDetails = await frApi.getFlightDetails(flight);
      returnFlight.setFlightDetails(flightDetails);
      return returnFlight;
    } catch (e) {
      console.log(e);
      throw new Error('Failed to fetch flight');
    }
  } else {
    throw new Error('Not logged in');
  }
}

export async function getFlightsAround(flight: Flight, range: number): Promise<Flight[]> {
  console.log("range : " + range);
  const rangeConverted = range * 1852
  if (!frApi.isLoggedIn()) {
    try {
      await connect();
    } catch (err) {
      throw new Error('Impossible to connect!');
    }
  }
  if (frApi.isLoggedIn() && flight) {
    try {
      const bounds = frApi.getBoundsByPoint(
        flight.latitude,
        flight.longitude,
        rangeConverted
      );
      console.log(bounds);
      const flightList: Flight[] = await frApi.getFlights(
        undefined,
        bounds,
        undefined,
        undefined,
        false
      );
      return flightList || [];
    } catch (e) {
      console.log(e);
      throw new Error('Failed to fetch flights');
    }
  } else {
    throw new Error('Failed to fetch flights');
  }
}

export async function logout(): Promise<void> {
  frApi.logout();
}
