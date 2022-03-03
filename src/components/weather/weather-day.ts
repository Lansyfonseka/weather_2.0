import getShortDayOfWeek from './helpers/day-of-week';
import './style/weather-day.scss';

class WeatherDay {
  day: any;
  constructor (day:any) {
    this.day = day;
  }
  render (numberOfDay:number) {
    const {nameDayOfWeek,dateDay} = getShortDayOfWeek(++numberOfDay);
    return `
    <div class="item-card">
            <div class="item-card__front-side icon-${this.day.icon}">
              <p class="weather__daily_day">${nameDayOfWeek}, ${dateDay}</p>
              <p class="weather__daily_temperature">
                <span class="temperature-day temperature">${Math.round(this.day.apparentTemperatureHigh)}°C</span>
                <span class="temperature-night temperature">${Math.round(this.day.apparentTemperatureLow)}°C</span>
              </p>
            </div>
            <div class="item-card__back-side">
              
              <p class="weather__daily_temperature-day item-card__back-side_line">
                <span>Day</span>
                <span class="bottom-dots"></span>
                <span>${Math.round(this.day.apparentTemperatureHigh)}°C</span>
              </p>
              <p class="weather__daily_weather__daily_temperature-night item-card__back-side_line">
                <span>Night</span>
                <span class="bottom-dots"></span>
                <span>${Math.round(this.day.apparentTemperatureLow)}°C</span>
              </p>
              <p class="weather__daily_wind item-card__back-side_line">
                <span>Wind</span>
                <span class="bottom-dots"></span>
                <span>${Math.round(this.day.windSpeed)}m/s</span>
              </p>
              <p class="weather__daily_humidity item-card__back-side_line">
                <span>Humidity</span>
                <span class="bottom-dots"></span>
                <span>${Math.round(this.day.humidity*100)}%</span>
              </p>
              <p class="weather__daily_precip-probability item-card__back-side_line">
                <span>Rain</span>
                <span class="bottom-dots"></span>
                <span>${Math.round(this.day.precipProbability*100)}%</span>
              </p>
              <p class="weather__daily_summary">${this.day.summary}</p>
            </div>            
          </div>
          `
  }
}

export default WeatherDay;