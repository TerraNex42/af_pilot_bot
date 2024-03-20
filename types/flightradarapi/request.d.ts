/**
 * Class to make requests to the FlightRadar24.
 */
export declare class APIRequest {
  /**
   * Constructor of the APIRequest class.
   *
   * @param {string} [url]
   * @param {object} [params]
   * @param {object} [headers]
   * @param {object} [data]
   * @param {object} [cookies]
   * @param {object} [excludeStatusCodes=[]]
   */
  constructor(
    url?: string,
    params?: object,
    headers?: object,
    data?: object,
    cookies?: object,
    excludeStatusCodes?: object
  );
  requestParams: {
    params: any;
    headers: any;
    data: any;
    cookies: any;
  };
  requestMethod: string;
  __excludeStatusCodes: any;
  url: string;
  __response: object;
  __content: any;
  /**
   * Send the request and receive a response.
   *
   * @return {this}
   */
  receive(): this;
  /**
   * Return the received content from the request.
   */
  getContent(): Promise<any>;
  /**
   * Return the received cookies from the request.
   */
  getCookies(): object;
  /**
   * Return the headers of the response.
   */
  getHeaders(): object;
  /**
   * Return the received response object.
   */
  getResponseObject(): object;
  /**
   * Return the status code of the response.
   */
  getStatusCode(): any;
}
//# sourceMappingURL=request.d.ts.map
