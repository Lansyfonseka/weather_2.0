import './style/weather.scss';

import storage from '../storage/storage';
import WeatherDay from './weather-day';
import { celsiusToFahrenheit } from './helpers/celsius-to-fahrenheit';
import { TEMPERATURE_SYMBOLS } from './helpers/temperature-symbols';
import { DATA_LANGUAGES_MAP } from '../language/helpers/data-languages-map';

class Weather {
  frame:HTMLElement;
  weatherToday:HTMLElement;
  weatherDaily:HTMLElement;
  constructor() {
    this.frame = document.createElement('div');
    this.frame.classList.add('weather');
  }
  get body () {
    return this.frame;
  }
  init() {
    const button = document.querySelector('.arrow');
    const waetherToday = button.parentElement;
    button.addEventListener('click', () => {
      waetherToday.classList.toggle('full-description')
    });
  }
  unmount () {
    this.frame.innerHTML = '';
  }
  render({currently, daily}:any,lang:string) {
    const date = new Date();
    const currentTemperatureSymbol = storage.isCelsius ? TEMPERATURE_SYMBOLS.CELSIUS : TEMPERATURE_SYMBOLS.FAHRENHEIT;

    let dailyContent:string = '';
    daily.data.forEach( (e:Object,index:number) => {
      dailyContent += new WeatherDay(e).render(index,lang);
    });

    const circleFill = (value:number) => {
      if (value !== 0)
      return `
      <path class="circle__fill"
      stroke-dasharray="${value}, 100"
      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831
        "
      />`
    }
    
    this.frame.innerHTML = `
        <div class="weather__today">
          <p class="weather__today_city">${storage.loactionInfo.city}</p>
          <p class="weather__today_country">${storage.loactionInfo.country || ''}</p>
          <p class="weather__today_day">${DATA_LANGUAGES_MAP.week[lang][date.getDay()]}, ${date.getDate()} ${DATA_LANGUAGES_MAP.month[lang][date.getMonth()]}</p>
          <p class="weather__today_description">${currently.summary}</p>
          <p class="weather__today_temperature">
            <span class="temperature">${Math.round(storage.isCelsius ? currently.temperature : celsiusToFahrenheit(currently.temperature))}${currentTemperatureSymbol}</span>
            <img src="./assets/icons/weather_icon/${currently.icon}.svg" alt="${currently.icon}">
          </p>
          <div class="weather__today_detail">
            <div class="weather__today_detail_wind">
              <p class="parameter-title">${DATA_LANGUAGES_MAP.other.windSpeed[lang]}</p>
              <p class="parameter-value">${Math.round(currently.windSpeed)}${DATA_LANGUAGES_MAP.other.speed[lang]}</p>
            </div>
            <div class="weather__today_detail_fells">
              <p class="parameter-title">${DATA_LANGUAGES_MAP.other.feels[lang]}</p>
              <p class="parameter-value">${Math.round(storage.isCelsius ? currently.apparentTemperature : celsiusToFahrenheit(currently.apparentTemperature))}${currentTemperatureSymbol}</p>
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
              <svg viewBox="0 0 36 36" class="circle">
                <path class="circle__background"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831
                    "
                />
                ${circleFill(Math.round(currently.humidity*100))}
                <text x="8" y="20.35" class="circle__value">${Math.round(currently.humidity*100)}%</text>
              </svg>
            </div>
            <div class="weather__today_detail_rain">
              <p class="parameter-title">${DATA_LANGUAGES_MAP.other.rain[lang]}</p>
              <svg viewBox="0 0 36 36" class="circle">
                <path class="circle__background"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831
                    "
                />
                ${circleFill(Math.round(currently.precipProbability*100))}
                <text x="8" y="20.35" class="circle__value">${Math.round(currently.precipProbability*100)}%</text>
              </svg>
            </div>
          </div>
          
          <button class="arrow"></button>
        </div>
        <div class="weather__daily">${dailyContent}</div>
    `;
  }
}

export default new Weather()