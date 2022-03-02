import getUserLoaction from "../../services/user-location.service";
import getWeather from "../../services/weather.service";
import LocationInfo from "../../services/models/services.model";
import initYandexMap from "../../services/yandex-map.service";

class Storage {
  weather:Object;
  loactionInfo: LocationInfo;
  myMap: {searchLocation:Function};
  constructor () {
  }
  async init () {
    this.loactionInfo = await getUserLoaction();
    this.myMap = await initYandexMap(this.loactionInfo.location.latitude,this.loactionInfo.location.longitude);
    this.loactionInfo = await this.myMap.searchLocation(this.loactionInfo.city);    
    this.weather = await getWeather(this.loactionInfo.location);
  }
}

export default new Storage();