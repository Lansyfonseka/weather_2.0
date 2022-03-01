import { createClient } from 'pexels';
import {MAIN_API_KEYS, MAIN_API_URLS} from './common/services.constants'

export default async function getImageUrl() {
  const config:any = {
    method: 'GET',
    header: {
      Accept: 'application/json',
      Authorization: MAIN_API_KEYS.BACKGROUND
    }
  }
  const request = new Request('https://api.pexels.com/v1/search?query=people',config);
  const response = await fetch(request);
}