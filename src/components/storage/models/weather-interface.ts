import WeatherDayIntarface from './weather-day-interface';

interface WeatherInterface {
  currently: {
    icon: string;
    summary: string;
    temperature: number;
    windSpeed: number;
    apparentTemperature: number;
    visibility: number;
    uvIndex: number;
    humidity: number;
    precipProbability: number;
  };
  daily: {
    data: Array<WeatherDayIntarface>;
  };
}

export default WeatherInterface;
