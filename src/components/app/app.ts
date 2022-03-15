import header from '../header/header'
import weather from '../weather/weather';
import storage from '../storage/storage';
import spinner from '../spinner/spinner';
import { MAIN_API_KEYS, MAIN_API_URLS } from '../../services/common/services.constants';

class App {
  entryPoint: HTMLElement;
  constructor () {
    this.entryPoint = document.querySelector('.app');
  }
  async init() {
    document.body.appendChild(spinner.render());
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('main');
    this.entryPoint.appendChild(mainContainer);

    const defaultLang = 'en';
    const currentLang = localStorage.lang || defaultLang;

    const yandexMapAPIScript = document.createElement('script');
    yandexMapAPIScript.src = `${MAIN_API_URLS.MAP}apikey=${MAIN_API_KEYS.MAP}&lang=${currentLang}_RU`;
    yandexMapAPIScript.type = 'text/javascript';

    document.body.appendChild(yandexMapAPIScript);
    yandexMapAPIScript.onload = async () => {
      await storage.init(currentLang);
      this.entryPoint.dataset.lang = storage.lang;
      this.entryPoint.prepend(header.render(storage.lang));
      header.init();
      mainContainer.prepend(weather.body);
      weather.render(storage.weather,storage.lang)
      weather.init();
      spinner.hide();
    }
  }
}

export default new App();