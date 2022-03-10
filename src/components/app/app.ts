import header from '../header/header'
import weather from '../weather/weather';
import storage from '../storage/storage';
import spinner from '../spinner/spinner';

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
    await storage.init();
    this.entryPoint.prepend(header.render(storage.lang));
    
    header.init();
    
    mainContainer.prepend(weather.body);
    weather.render(storage.weather,storage.lang)
    weather.init();
    spinner.hide();
  }
}

export default new App();