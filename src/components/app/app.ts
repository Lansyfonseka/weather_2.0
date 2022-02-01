import header from '../header/header'
import weather from '../weather/weather';
import getUserLoaction from '../../services/user-location.service';
import storage from '../storage/storage';
import initYandexMap from '../../services/yandex-map.service';

class App {
  entryPoint: HTMLElement;
  constructor () {
    this.entryPoint = document.querySelector('.app');
  }
  async init() {
    header.render();
    await storage.init();
    // this.entryPoint.innerHTML = Header.render();
    // document.body.appendChild(this.entryPoint);
    document.querySelector('main').appendChild(weather.render());
    await initYandexMap(storage.loactionInfo.location.latitude,storage.loactionInfo.location.longitude)
  }
}

export default new App();