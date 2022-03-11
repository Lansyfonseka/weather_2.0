import getWeather from '../../services/weather.service';
import background from '../background/background';
import { DATA_LANGUAGES_MAP } from '../language/helpers/DATA-LANGUAGES-MAP';
import spinner from '../spinner/spinner';
import storage from '../storage/storage';
import weather from '../weather/weather';
import './style/search.scss';

class Search {
  searchInput: HTMLInputElement;
  searchButton: HTMLElement;
  constructor () {
    this.search = this.search.bind(this)
  }
  init () {
    this.searchInput = document.querySelector('.search__input');
    this.searchButton = document.querySelector('.search__button');

    this.searchButton.addEventListener('click',this.search);
    window.addEventListener('keydown',(event) => {
      const keyCodeEnter = 'Enter';
      if (!event.repeat && event.key === keyCodeEnter)
        this.search();
    })
  }
  changeLang(lang:string) {
    this.searchInput.placeholder = DATA_LANGUAGES_MAP.other.searchCity[lang];
    this.searchButton.innerHTML = DATA_LANGUAGES_MAP.other.search[lang];
  }
  async search () {
    spinner.show();
    weather.unmount();
    const searchCity:string = this.searchInput.value;
    storage.loactionInfo = await storage.myMap.searchLocation(searchCity);
    storage.weather = await getWeather(storage.loactionInfo.location,storage.lang);
    weather.render(storage.weather,storage.lang);
    weather.init();
    background.reloadImage();
    spinner.hide();
  }
}

export default new Search();