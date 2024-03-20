export = FlightTrackerConfig;
/**
 * Data class with settings of the Real Time Flight Tracker.
 */
declare class FlightTrackerConfig {
  /**
   * Constructor of FlighTrackerConfig class.
   *
   * @param {object} data
   */
  constructor(data: object);
  faa: string;
  satellite: string;
  mlat: string;
  flarm: string;
  adsb: string;
  gnd: string;
  air: string;
  vehicles: string;
  estimated: string;
  maxage: string;
  gliders: string;
  stats: string;
  limit: string;
}
//# sourceMappingURL=flightTrackerConfig.d.ts.map
