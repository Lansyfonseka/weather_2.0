export default interface GeoObjectIntarface {
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
