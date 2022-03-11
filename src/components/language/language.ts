import getWeather from '../../services/weather.service';
import search from '../search/search';
import spinner from '../spinner/spinner';
import storage from '../storage/storage';
import weather from '../weather/weather';
import './style/language.scss'

class Language {
  constructor () {

  }
  init () {
    const button = document.querySelector('.language-select__header');
    const selector = document.querySelector('.language-select__body');
    const leanguage = button.parentElement;
    button.addEventListener('click', () => {
      leanguage.classList.toggle('active');
    });
    selector.addEventListener('click', (event:Event) => {
      const target = event.target as HTMLElement;
      if (target.dataset.lang) {
        button.innerHTML = target.outerHTML;
        leanguage.classList.toggle('active');
        this.changeLang(target.dataset.lang)
      }
    })
  };
  async changeLang(lang:string) {
    spinner.show();
    storage.lang = lang;
    const app = document.querySelector('.app') as HTMLElement;
    app.dataset.lang = storage.lang;
    search.changeLang(storage.lang);
    weather.unmount();
    storage.weather = await getWeather(storage.loactionInfo.location,storage.lang)
    weather.render(storage.weather, storage.lang);
    weather.init();
    spinner.hide();
  }
  render () {

  }
}

export default new Language;