import {MAIN_API_KEYS, MAIN_API_URLS} from './common/services.constants'

export default async function getImageUrl(city:string):Promise<{mainImageUrl:string,lowImageUrl:string}> {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: MAIN_API_KEYS.BACKGROUND
    }
  };
  const countImages = 80;
  const request = new Request(`${MAIN_API_URLS.BACKGROUND}?query=${city.toLowerCase()}&per_page=${countImages}&orientation=landscape`,config);
  const response = await fetch(request);
  const data = await response.json();
  
  const countOfResult = data.photos.length;
  if (countOfResult === 0 || !data.photos) {
    const baseQuery = 'weather';
    return getImageUrl(baseQuery);
  } else {
    const randomPhoto = Math.floor(Math.random() * countOfResult);
    return {
      mainImageUrl: data.photos[randomPhoto].src.large2x,
      lowImageUrl: data.photos[randomPhoto].src.tiny
    }
  }
}