import LocationInfo from "../../services/models/services.model";
import storage from "../storage/storage";

class Map {
  map: {
    panTo: Function,
    destroy: Function
  };
  init() {
    const enptyPoint = document.querySelector('.main');
    const mapContainer = document.createElement('div');
    mapContainer.id = 'map';
    enptyPoint.appendChild(mapContainer);
  }
  async createMap(ymaps:any,{latitude,longitude}:{latitude:number,longitude:number}) {
    await ymaps.ready();
    this.map = new ymaps.Map("map", {
      center: [latitude, longitude],
      zoom: 11
    });
  }
  async findPlace(searchCity:string):Promise<LocationInfo> {
    if (!searchCity) {
      alert('Write any city');
    } else {
      const response = ymaps.geocode(searchCity,{result:1});
      const result = response.then( (res:{geoObjects:{get:Function}}) => {
        const firstGeoObject = res.geoObjects.get(0);
        if (!firstGeoObject) {
          alert('Nothing found');
          throw Error('Nothing found');
        }
        const latitude = firstGeoObject.geometry._coordinates[0]; 
        const longitude = firstGeoObject.geometry._coordinates[1];
        this.map.panTo([latitude,longitude],{delay:2000});
        return {
          location: {latitude,longitude},
          city: firstGeoObject.properties._data.name,
          country: firstGeoObject.properties._data.description
        }
      });
      return result;
    }
  }
  changeLang(lang:string) {
    const config = `&lang=${lang}_RU&ns=ymaps`;
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=771966d7-3137-43b4-bb31-c414aaac9510${config}`;
    script.type = 'text/javascript';
    document.head.appendChild(script);
    script.onload = () => {
      this.map.destroy();
      this.createMap(ymaps,storage.locationInfo.location);
    }
  }
}

export default new Map();