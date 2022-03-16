import './style/weather.scss';

import storage from '../storage/storage';
import WeatherDay from './weather-day';
import WeatherInterface from '../storage/models/weather-interface';
import temperatureToRender from './helpers/temperature-render';
import { DATA_LANGUAGES_MAP } from '../language/helpers/data-languages-map';
import CircleDiagram from './helpers/circle-diagram';

class Weather {
  frame: HTMLElement;
  weatherToday: HTMLElement;
  weatherDaily: HTMLElement;
  constructor() {
    this.frame = document.createElement('div');
    this.frame.classList.add('weather');
  }
  get body() {
    return this.frame;
  }
  init() {
    const button = document.querySelector('.arrow');
    const waetherToday = button.parentElement;
    button.addEventListener('click', () => {
      waetherToday.classList.toggle('full-description');
    });
  }
  unmount() {
    this.frame.innerHTML = '';
  }
  render({ currently, daily }: WeatherInterface, lang: string) {
    const date = new Date();
    const dailyContent = daily.data.map((element, index) => new WeatherDay(element).render(index, lang)).join('');

    this.frame.innerHTML = `
      <div class="weather__today">
        <p class="weather__today_city">${storage.locationInfo.city}</p>
        <p class="weather__today_country">${storage.locationInfo.country || ''}</p>
        <p class="weather__today_day">${DATA_LANGUAGES_MAP.week[lang][date.getDay()]}, ${date.getDate()} ${
      DATA_LANGUAGES_MAP.month[lang][date.getMonth()]
    }</p>
        <p class="weather__today_description">${currently.summary}</p>
        <p class="weather__today_temperature">
          <span class="temperature">${temperatureToRender(Math.round(currently.temperature), storage.isCelsius)}</span>
          <img src="./assets/icons/weather_icon/${currently.icon}.svg" alt="${currently.icon}">
        </p>
        <div class="weather__today_detail">
          <div class="weather__today_detail_wind">
            <p class="parameter-title">${DATA_LANGUAGES_MAP.other.windSpeed[lang]}</p>
            <p class="parameter-value">${Math.round(currently.windSpeed)}${DATA_LANGUAGES_MAP.other.speed[lang]}</p>
          </div>
          <div class="weather__today_detail_fells">
            <p class="parameter-title">${DATA_LANGUAGES_MAP.other.feels[lang]}</p>
            <p class="parameter-value">${temperatureToRender(
              Math.round(currently.apparentTemperature),
              storage.isCelsius
            )}</p>
          </div>
          <div class="weather__today_detail_visibility">
            <p class="parameter-title">${DATA_LANGUAGES_MAP.other.visibility[lang]}</p>
            <p class="parameter-value">${Math.round(currently.visibility)}${DATA_LANGUAGES_MAP.other.length[lang]}</p>
          </div>
          <div class="weather__today_detail_uvIndex">
            <p class="parameter-title">${DATA_LANGUAGES_MAP.other.uvIndex[lang]}</p>
            <p class="parameter-value">${Math.round(currently.uvIndex)}</p>
          </div>
          <div class="weather__today_detail_humidity">
            <p class="parameter-title">${DATA_LANGUAGES_MAP.other.humidity[lang]}</p>
            ${new CircleDiagram(Math.round(currently.humidity * 100)).render()}
          </div>
          <div class="weather__today_detail_rain">
            <p class="parameter-title">${DATA_LANGUAGES_MAP.other.rain[lang]}</p>
            ${new CircleDiagram(Math.round(currently.precipProbability * 100)).render()}
          </div>
        </div>
        <button class="arrow"></button>
      </div>
      <div class="weather__daily">${dailyContent}</div>
    `;
  }
}

export default new Weather();
