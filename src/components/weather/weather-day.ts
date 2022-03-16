import { DATA_LANGUAGES_MAP } from '../language/helpers/data-languages-map';
import WeatherDayIntarface from '../storage/models/weather-day-interface';
import storage from '../storage/storage';
import temperatureToRender from './helpers/temperature-render';
import getShortDayOfWeek from './helpers/day-of-week';
import './style/weather-day.scss';

class WeatherDay {
  day: WeatherDayIntarface;
  constructor(day: WeatherDayIntarface) {
    this.day = day;
  }
  render(numberOfDay: number, lang: string) {
    const { day, date } = getShortDayOfWeek(numberOfDay + 1);
    return `
      <div class="item-card">
        <div class="item-card__front-side icon-${this.day.icon}">
          <p class="weather__daily_day">${DATA_LANGUAGES_MAP.shortWeek[lang][day]}, ${date}</p>
          <p class="weather__daily_temperature">
            <span class="temperature-day temperature">${temperatureToRender(
              Math.round(this.day.apparentTemperatureHigh),
              storage.isCelsius
            )}</span>
            <span class="temperature-night temperature">${temperatureToRender(
              Math.round(this.day.apparentTemperatureLow),
              storage.isCelsius
            )}</span>
          </p>
        </div>
        <div class="item-card__back-side">
          <p class="weather__daily_temperature-day item-card__back-side_line">
            <span>${DATA_LANGUAGES_MAP.other.day[lang]}</span>
            <span class="bottom-dots"></span>
            <span class="temperature">${temperatureToRender(
              Math.round(this.day.apparentTemperatureHigh),
              storage.isCelsius
            )}</span>
          </p>
          <p class="weather__daily_weather__daily_temperature-night item-card__back-side_line">
            <span>${DATA_LANGUAGES_MAP.other.night[lang]}</span>
            <span class="bottom-dots"></span>
            <span class="temperature">${temperatureToRender(
              Math.round(this.day.apparentTemperatureLow),
              storage.isCelsius
            )}</span>
          </p>
          <p class="weather__daily_wind item-card__back-side_line">
            <span>${DATA_LANGUAGES_MAP.other.wind[lang]}</span>
            <span class="bottom-dots"></span>
            <span>${Math.round(this.day.windSpeed)}${DATA_LANGUAGES_MAP.other.speed[lang]}</span>
          </p>
          <p class="weather__daily_humidity item-card__back-side_line">
            <span>${DATA_LANGUAGES_MAP.other.humidity[lang]}</span>
            <span class="bottom-dots"></span>
            <span>${Math.round(this.day.humidity * 100)}%</span>
          </p>
          <p class="weather__daily_precip-probability item-card__back-side_line">
            <span>${DATA_LANGUAGES_MAP.other.humidity[lang]}</span>
            <span class="bottom-dots"></span>
            <span>${Math.round(this.day.precipProbability * 100)}%</span>
          </p>
          <p class="weather__daily_summary">${this.day.summary}</p>
        </div>            
      </div>
      `;
  }
}

export default WeatherDay;
