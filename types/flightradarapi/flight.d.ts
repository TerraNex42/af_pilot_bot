export = Flight;
/**
 * Flight representation.
 */
declare class Flight extends Entity {
  /**
   * Constructor of Flight class.
   *
   * @param {*} flightId - The flight ID specifically used by FlightRadar24
   * @param {*} info - Dictionary with received data from FlightRadar24
   */
  constructor(flightId: any, info: any);
  id: any;
  icao24bit: any;
  heading: any;
  altitude: any;
  groundSpeed: any;
  squawk: any;
  aircraftCode: any;
  registration: any;
  time: any;
  originAirportIata: any;
  destinationAirportIata: any;
  number: any;
  airlineIata: any;
  onGround: any;
  verticalSpeed: any;
  callsign: any;
  airlineIcao: any;
  /**
   * Check one or more flight information.
   *
   * You can use the prefix "max" or "min" in the parameter
   * to compare numeric data with ">" or "<".
   *
   * Example: checkInfo({minAltitude: 6700, maxAltitude: 13000, airlineIcao: "THY"})
   *
   * @param {object} info
   * @return {boolean}
   */
  checkInfo(info: object): boolean;
  /**
   * Return the formatted altitude, with the unit of measure.
   *
   * @return {string}
   */
  getAltitude(): string;
  /**
   * Return the formatted flight level, with the unit of measure.
   *
   * @return {string}
   */
  getFlightLevel(): string;
  /**
   * Return the formatted ground speed, with the unit of measure.
   *
   * @return {string}
   */
  getGroundSpeed(): string;
  /**
   * Return the formatted heading, with the unit of measure.
   *
   * @return {string}
   */
  getHeading(): string;
  /**
   * Return the formatted vertical speed, with the unit of measure.
   *
   * @return {string}
   */
  getVerticalSpeed(): string;
  /**
   * Set flight details to the instance. Use FlightRadar24API.getFlightDetails(...) method to get it.
   *
   * @param {object} flightDetails
   * @return {undefined}
   */
  setFlightDetails(flightDetails: object): undefined;
  aircraftAge: any;
  aircraftCountryId: any;
  aircraftHistory: any;
  aircraftImages: any;
  aircraftModel: any;
  airlineName: any;
  airlineShortName: any;
  destinationAirportAltitude: any;
  destinationAirportCountryCode: any;
  destinationAirportCountryName: any;
  destinationAirportLatitude: any;
  destinationAirportLongitude: any;
  destinationAirportIcao: any;
  destinationAirportBaggage: any;
  destinationAirportGate: any;
  destinationAirportName: any;
  destinationAirportTerminal: any;
  destinationAirportVisible: any;
  destinationAirportWebsite: any;
  destinationAirportTimezoneAbbr: any;
  destinationAirportTimezoneAbbrName: any;
  destinationAirportTimezoneName: any;
  destinationAirportTimezoneOffset: any;
  destinationAirportTimezoneOffsetHours: any;
  originAirportAltitude: any;
  originAirportCountryCode: any;
  originAirportCountryName: any;
  originAirportLatitude: any;
  originAirportLongitude: any;
  originAirportIcao: any;
  originAirportBaggage: any;
  originAirportGate: any;
  originAirportName: any;
  originAirportTerminal: any;
  originAirportVisible: any;
  originAirportWebsite: any;
  originAirportTimezoneAbbr: any;
  originAirportTimezoneAbbrName: any;
  originAirportTimezoneName: any;
  originAirportTimezoneOffset: any;
  originAirportTimezoneOffsetHours: any;
  statusIcon: any;
  statusText: any;
  timeDetails: any;
  trail: any;
}
import Entity = require('./entity');
//# sourceMappingURL=flight.d.ts.map
