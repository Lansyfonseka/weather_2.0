import {MAIN_API_KEYS, MAIN_API_URLS} from './common/services.constants'
import LocationInfo from './models/services.model';

export default async function getUserLoaction() {
  const URL = `${MAIN_API_URLS.USER_LOCATION}${MAIN_API_KEYS.USER_LOCATION}`;
  const data = await fetch(URL).then(res => res.json());
  const location = data.loc.split(',').map( (e:string) => +e);
  const result:LocationInfo = {
    location: {
      latitude: location[0],
      longitude: location[1]
    },
    city: data.city
  }
  return result
}
