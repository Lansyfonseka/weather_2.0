import getWeather from '../../services/weather.service';
import map from '../map/map';
import search from '../search/search';
import spinner from '../spinner/spinner';
import storage from '../storage/storage';
import weather from '../weather/weather';
import './style/language.scss';

class Language {
  init() {
    const button = document.querySelector('.language-select__header');
    const selector = document.querySelector('.language-select__body');
    const leanguage = button.parentElement;
    const activeLang = selector.querySelector(`[data-lang=${storage.lang}]`);
    button.innerHTML = activeLang.outerHTML;
    button.addEventListener('click', () => {
      leanguage.classList.toggle('active');
    });
    selector.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.dataset.lang) {
        button.innerHTML = target.outerHTML;
        leanguage.classList.toggle('active');
        this.changeLang(target.dataset.lang);
      }
    });
  }
  async changeLang(lang: string) {
    spinner.show();
    storage.lang = lang;
    localStorage.lang = storage.lang;
    const app = document.querySelector('.app') as HTMLElement;
    app.dataset.lang = storage.lang;
    search.changeLang(storage.lang);
    map.changeLang(storage.locationInfo.location, storage.lang);
    weather.unmount();
    storage.weather = await getWeather(storage.locationInfo.location, storage.lang);
    weather.render(storage.weather, storage.lang);
    weather.init();
    spinner.hide();
  }
}

export default new Language();
