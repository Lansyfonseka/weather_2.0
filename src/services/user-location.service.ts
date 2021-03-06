import { MAIN_API_KEYS, MAIN_API_URLS } from './common/services.constants';

export default async function getUserLocation() {
  const URL = `${MAIN_API_URLS.USER_LOCATION}${MAIN_API_KEYS.USER_LOCATION}`;
  const data = await fetch(URL).then((res) => res.json());
  const location = data.loc.split(',').map((e: string) => +e);
  const result = {
    location: {
      latitude: location[0],
      longitude: location[1],
    },
    city: data.city,
  };
  return result;
}
