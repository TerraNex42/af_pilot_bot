export = FlightRadar24API;
/**
 * Main class of the FlightRadarAPI
 */
declare class FlightRadar24API {
  __flightTrackerConfig: FlightTrackerConfig;
  __loginData: {
    userData: any;
    cookies: object;
  };
  /**
   * Return a list with all airlines.
   *
   * @return {object}
   */
  getAirlines(): object;
  /**
   * Download the logo of an airline from FlightRadar24 and return it as bytes.
   *
   * @param {string} iata - IATA of the airline
   * @param {string} icao - ICAO of the airline
   * @return {[object, string]}
   */
  getAirlineLogo(iata: string, icao: string): [object, string];
  /**
   * Return basic information about a specific airport.
   *
   * @param {string} code - ICAO or IATA of the airport
   * @param {boolean} details - If true, it returns flights with detailed information
   * @return {Airport}
   */
  getAirport(code: string, details?: boolean): Airport;
  /**
   * Return the airport details from FlightRadar24.
   *
   * @param {string} code - ICAO or IATA of the airport
   * @param {number} [flightLimit=100] - Limit of flights related to the airport
   * @param {number} [page=1] - Page of result to display
   * @return {object}
   */
  getAirportDetails(code: string, flightLimit?: number, page?: number): object;
  /**
   * Return airport disruptions.
   *
   * @return {object}
   */
  getAirportDisruptions(): object;
  /**
   * Return a list with all airports.
   *
   * @return {Array<Airport>}
   */
  getAirports(): Airport[];
  /**
   * Return the bookmarks from the FlightRadar24 account.
   *
   * @return {object}
   */
  getBookmarks(): object;
  /**
   * Convert coordinate dictionary to a string "y1, y2, x1, x2".
   *
   * @param {object} zone - Dictionary containing the following keys: tl_y, tl_x, br_y, br_x
   * @return {string}
   */
  getBounds(zone: object): string;
  /**
   * Convert a point coordinate and a radius to a string "y1, y2, x1, x2".
   *
   * @param {number} latitude - Latitude of the point
   * @param {number} longitude - Longitude of the point
   * @param {number} radius - Radius in meters to create area around the point
   * @return {string}
   */
  getBoundsByPoint(latitude: number, longitude: number, radius: number): string;
  /**
   * Download the flag of a country from FlightRadar24 and return it as bytes.
   *
   * @param {string} country - Country name
   * @return {[object, string]}
   */
  getCountryFlag(country: string): [object, string];
  /**
   * Return the flight details from Data Live FlightRadar24.
   *
   * @param {Flight} flight - A Flight instance.
   * @return {object}
   */
  getFlightDetails(flight: Flight): object;
  /**
   * Return a list of flights. See more options at setFlightTrackerConfig() method.
   *
   * @param {string} [airline] - The airline ICAO. Ex: "DAL"
   * @param {string} [bounds] - Coordinates (y1, y2 ,x1, x2). Ex: "75.78,-75.78,-427.56,427.56"
   * @param {string} [registration] - Aircraft registration
   * @param {string} [aircraftType] - Aircraft model code. Ex: "B737"
   * @param {boolean} [details] -  If true, it returns flights with detailed information
   * @return {Array<Flight>}
   */
  getFlights(
    airline?: string,
    bounds?: string,
    registration?: string,
    aircraftType?: string,
    details?: boolean
  ): Flight[];
  /**
   * Return a copy of the current config of the Real Time Flight Tracker, used by getFlights() method.
   *
   * @return {FlightTrackerConfig}
   */
  getFlightTrackerConfig(): FlightTrackerConfig;
  /**
   * Return the user data.
   *
   * @return {object}
   */
  getLoginData(): object;
  /**
   * Return the most tracked data.
   *
   * @return {object}
   */
  getMostTracked(): object;
  /**
   * Return boundaries of volcanic eruptions and ash clouds impacting aviation.
   *
   * @return {object}
   */
  getVolcanicEruptions(): object;
  /**
   * Return all major zones on the globe.
   *
   * @return {object}
   */
  getZones(): object;
  /**
   * Return the search result.
   *
   * @param {string} query
   * @param {number} [limit=50]
   * @return {object}
   */
  search(query: string, limit?: number): object;
  /**
   * Check if the user is logged into the FlightRadar24 account.
   *
   * @return {boolean}
   */
  isLoggedIn(): boolean;
  /**
   * Log in to a FlightRadar24 account.
   *
   * @param {string} user - Your email.
   * @param {string} password - Your password.
   * @return {undefined}
   */
  login(user: string, password: string): undefined;
  /**
   * Log out of the FlightRadar24 account.
   *
   * @return {boolean} - Return a boolean indicating that it successfully logged out of the server.
   */
  logout(): boolean;
  /**
   * Set config for the Real Time Flight Tracker, used by getFlights() method.
   *
   * @param {FlightTrackerConfig} [flightTrackerConfig] - If null, set to the default config.
   * @param {object} [config={}] - Config as an JSON object
   * @return {undefined}
   */
  setFlightTrackerConfig(
    flightTrackerConfig?: FlightTrackerConfig,
    config?: object
  ): undefined;
}
import FlightTrackerConfig = require('./flightTrackerConfig');
import Airport = require('./airport');
import Flight = require('./flight');
//# sourceMappingURL=api.d.ts.map
