import getUserLocation from '../../services/user-location.service';
import getWeather from '../../services/weather.service';
import LocationInfo from '../../services/models/services.model';
import WeatherInterface from './models/weather-interface';
import map from '../map/map';
// import { ymaps } from '../map/lib.ymaps';

class Storage {
  weather: WeatherInterface;
  locationInfo: LocationInfo;
  isCelsius: boolean;
  isDark: boolean;
  lang: string;
  async init(lang: string) {
    this.lang = lang;
    this.locationInfo = await getUserLocation();
    map.init();
    await map.createMap(ymaps, this.locationInfo.location);
    this.locationInfo = await map.findPlace(this.locationInfo.city);
    this.weather = await getWeather(this.locationInfo.location, this.lang);
    this.isCelsius = localStorage.isCelsius ? JSON.parse(localStorage.isCelsius) : true;
    this.isDark = localStorage.isDark ? JSON.parse(localStorage.isDark) : true;
  }
}

export default new Storage();
