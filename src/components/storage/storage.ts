import getUserLoaction from "../../services/user-location.service";
import getWeather from "../../services/weather.service";
import LocationInfo from "../../services/models/services.model";

class Storage {
  weatherToday:Object;
  loactionInfo: LocationInfo;
  myMap: {searchLocation:Function}
  constructor () {
    this.weatherToday = {};
  }
  async init () {
    this.loactionInfo = await getUserLoaction();
    getWeather(this.loactionInfo.location.latitude,this.loactionInfo.location.longitude)
  }
}

export default new Storage()