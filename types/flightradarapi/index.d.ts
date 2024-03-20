export as namespace flightradarapi;

import FlightRadar24API = require('./api');
import FlightTrackerConfig = require('./flightTrackerConfig');
import Airport = require('./airport');
import Entity = require('./entity');
import Flight = require('./flight');
import { AirportNotFoundError } from './errors';
import { CloudflareError } from './errors';
import { LoginError } from './errors';
export const author: 'Jean Loui Bernard Silva de Jesus';
export const version: '1.3.25';
export {
  FlightRadar24API,
  FlightTrackerConfig,
  Airport,
  Entity,
  Flight,
  AirportNotFoundError,
  CloudflareError,
  LoginError
};
//# sourceMappingURL=index.d.ts.map
