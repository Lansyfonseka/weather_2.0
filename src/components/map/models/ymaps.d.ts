declare namespace ymaps {
  export function ready(): void;
  export function geocode(seacrhCity: string, confin: { result: number }): Promise;

  export interface Promise {
    then(onFulfilled: (res: GeoObjectIntarface) => LocationInfo): LocationInfo;
  }
  export class Map {
    constructor(
      element: string,
      config: {
        center: [latitude: number, longitude: number];
        zoom: number;
      }
    );
  }
}

interface LocationInfo {
  location: { latitude: number; longitude: number };
  city: string;
  country?: string;
}

interface GeoObjectIntarface {
  geoObjects: {
    get: (value: number) => {
      geometry: {
        _coordinates: Array<number>;
      };
      properties: {
        _data: {
          name: string;
          description: string;
        };
      };
    };
  };
}
