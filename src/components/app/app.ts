import header from '../header/header'
import weather from '../weather/weather';
import getUserLoaction from '../../services/user-location.service';
import storage from '../storage/storage';

class App {
  entryPoint: HTMLElement;
  constructor () {
    this.entryPoint = document.querySelector('.app');
  }
  async init() {
    header.render();
    storage.init();
    // this.entryPoint.innerHTML = Header.render();
    // document.body.appendChild(this.entryPoint);
    document.querySelector('main').appendChild(weather.render());
  }
}

export default new App();