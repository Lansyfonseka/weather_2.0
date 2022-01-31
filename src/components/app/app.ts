import header from '../header/header'
import weather from '../weather/weather';

class App {
  entryPoint: HTMLElement;
  constructor () {
    this.entryPoint = document.querySelector('.app');
  }
  async init() {
    header.render()
    // this.entryPoint.innerHTML = Header.render();
    // document.body.appendChild(this.entryPoint);
    document.querySelector('main').appendChild(weather.render())
  }
}

export default new App();