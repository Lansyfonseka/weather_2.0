import {MAIN_API_KEYS, MAIN_API_URLS} from './common/services.constants'

export default async function getWeather(latitude:number, longitude:number) {
  const CONFIG = `?lang=ru`;
  const URL = `${MAIN_API_URLS.WEATHER}${MAIN_API_KEYS.WEATHER}${latitude.toFixed(4)},${longitude.toFixed(4)}`;
  const PROXY = "https://evening-basin-27448.herokuapp.com/";
  
  const data = await fetch(PROXY + URL + CONFIG).then(res => res.json());
  return data
}