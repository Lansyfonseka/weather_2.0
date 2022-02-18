import header from '../header/header'
import weather from '../weather/weather';
import storage from '../storage/storage';
import initYandexMap from '../../services/yandex-map.service';
import search from '../search/search';
import spinner from '../spinner/spinner';
import themeSwitch from '../theme/theme-switch';

class App {
  entryPoint: HTMLElement;
  constructor () {
    this.entryPoint = document.querySelector('.app');
  }
  async init() {
    header.render();
    // await storage.init();
    // this.entryPoint.innerHTML = Header.render();
    // document.body.appendChild(this.entryPoint);
    // document.querySelector('main').appendChild(weather.render());
    weather.render();
    // const lat = 54.9102;
    // const lan = 26.708;
    // await initYandexMap(lat,lan)
    // const {latitude,longitude} = storage.loactionInfo.location;
    // await initYandexMap(latitude,longitude);

    search.init();
    themeSwitch.init();
    document.body.appendChild(spinner.render());
    spinner.hide();
  }
}

export default new App();