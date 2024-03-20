export = Airport;
/**
 * Airport representation.
 */
declare class Airport extends Entity {
  /**
   * Constructor of Airport class.
   *
   * The parameters below are optional. You can just create an Airport instance with no information
   * and use the setAirportDetails(...) method for having an instance with detailed information.
   *
   * @param {object} [basicInfo] - Basic information about the airport received from FlightRadar24
   * @param {object} [info] - Dictionary with more information about the airport received from FlightRadar24
   */
  constructor(basicInfo?: object, info?: object);
  /**
   * Initialize instance with basic information about the airport.
   *
   * @param {object} basicInfo
   */
  __initializeWithBasicInfo(basicInfo: object): void;
  altitude: any;
  name: any;
  icao: any;
  iata: any;
  country: any;
  /**
   * Initialize instance with extra information about the airport.
   *
   * @param {object} info
   */
  __initializeWithInfo(info: object): void;
  countryCode: any;
  city: any;
  timezoneName: any;
  timezoneOffset: any;
  timezoneOffsetHours: any;
  timezoneAbbr: any;
  timezoneAbbrName: any;
  visible: any;
  website: any;
  /**
   * Set airport details to the instance. Use FlightRadar24API.getAirportDetails(...) method to get it.
   *
   * @param {object} airportDetails
   */
  setAirportDetails(airportDetails: object): void;
  country_code: any;
  country_id: any;
  reviewsUrl: any;
  reviews: any;
  evaluation: any;
  averageRating: any;
  totalRating: any;
  weather: any;
  runways: any;
  aircraftOnGround: any;
  aircraftVisibleOnGround: any;
  arrivals: any;
  departures: any;
  wikipedia: any;
  images: any;
}
import Entity = require('./entity');
//# sourceMappingURL=airport.d.ts.map
