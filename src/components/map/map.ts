import LocationInfo from '../../services/models/services.model';
import GeoObjectIntarface from './models/geo-object-interface';
import MapInterface from './models/map-interface';

class Map {
  map: {
    panTo: (location: number[], config: { delay: number }) => void;
    destroy: () => void;
  };
  init() {
    const enptyPoint = document.querySelector('.main');
    const mapContainer = document.createElement('div');
    mapContainer.id = 'map';
    enptyPoint.appendChild(mapContainer);
  }
  async createMap(ymap: typeof ymaps, { latitude, longitude }: { latitude: number; longitude: number }) {
    await ymap.ready();
    this.map = new ymap.Map('map', {
      center: [latitude, longitude],
      zoom: 11,
    }) as MapInterface;
  }
  async findPlace(searchCity: string): Promise<LocationInfo> {
    if (!searchCity) {
      alert('Write any city');
      return undefined;
    }
    const response = ymaps.geocode(searchCity, { result: 1 });
    const result = response.then((res: GeoObjectIntarface) => {
      const firstGeoObject = res.geoObjects.get(0);
      if (!firstGeoObject) {
        alert('Nothing found');
        throw Error('Nothing found');
      }
      const latitude: number = firstGeoObject.geometry._coordinates[0];
      const longitude: number = firstGeoObject.geometry._coordinates[1];
      this.map.panTo([latitude, longitude], { delay: 2000 });
      return {
        location: { latitude, longitude },
        city: firstGeoObject.properties._data.name,
        country: firstGeoObject.properties._data.description,
      };
    });
    return result;
  }
  changeLang(location: { latitude: number; longitude: number }, lang: string) {
    const config = `&lang=${lang}_RU&ns=ymaps`;
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=771966d7-3137-43b4-bb31-c414aaac9510${config}`;
    script.type = 'text/javascript';
    document.head.appendChild(script);
    script.onload = () => {
      this.map.destroy();
      this.createMap(ymaps, location);
    };
  }
}

export default new Map();
