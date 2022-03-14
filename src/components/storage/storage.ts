import getUserLoaction from "../../services/user-location.service";
import getWeather from "../../services/weather.service";
import LocationInfo from "../../services/models/services.model";
import initYandexMap from "../../services/yandex-map.service";
import WeatherInterface from "./models/weather-interface";

class Storage {
  weather:WeatherInterface;
  loactionInfo: LocationInfo;
  myMap: {searchLocation:Function};
  isCelsius: boolean;
  lang: string;
  constructor () {
  }
  async init () {
    this.lang = 'en';
    this.loactionInfo = await getUserLoaction();
    this.myMap = await initYandexMap(this.loactionInfo.location.latitude,this.loactionInfo.location.longitude);
    this.loactionInfo = await this.myMap.searchLocation(this.loactionInfo.city);    
    this.weather = await getWeather(this.loactionInfo.location,this.lang);
    this.isCelsius = true;
  }
}

export default new Storage();