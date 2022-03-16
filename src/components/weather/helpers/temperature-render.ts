import { TEMPERATURE_SYMBOLS } from './temperature-symbols';

export default function temperatureToRender(temperature: number, isCelsius: boolean): string {
  return isCelsius
    ? temperature + TEMPERATURE_SYMBOLS.CELSIUS
    : Math.round((temperature * 9) / 5 + 32) + TEMPERATURE_SYMBOLS.FAHRENHEIT;
}
