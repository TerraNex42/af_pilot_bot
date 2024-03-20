export = Entity;
/**
 * Representation of a real entity, at some location.
 */
declare class Entity {
  static __defaultText: string;
  /**
   * Constructor of Entity class.
   *
   * @param {number} latitude
   * @param {number} longitude
   */
  constructor(latitude?: number, longitude?: number);
  __setPosition(latitude: any, longitude: any): void;
  latitude: any;
  longitude: any;
  __getInfo(info: any, replaceBy?: any): any;
  /**
   * Return the distance from another entity (in kilometers).
   *
   * @param {Entity} entity
   * @return {number}
   */
  getDistanceFrom(entity: Entity): number;
}
//# sourceMappingURL=entity.d.ts.map
