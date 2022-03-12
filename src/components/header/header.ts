import './style/header.scss'

import '../search/search'
import background from '../background/background'
import language from '../language/language'
import temperature from '../temperature/temperature'
import themeSwitch from '../theme/theme-switch'
import search from '../search/search'
import { DATA_LANGUAGES_MAP } from '../language/helpers/data-languages-map'

class Header {
  init () {
    background.init();
    language.init();
    temperature.init();
    themeSwitch.init();
    search.init();
  }
  render (lang:string) {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `<section class="switchers">
    <button class="reload-image">
      <span class="reload-image__icon"></span>
    </button>
    <div class="language-select">
      <div class="language-select__header">
        <p data-language='eng'>English</p>
      </div>
      <div class="language-select__body">
        <p data-lang="en">English</p>
        <p data-lang="ru">Russian</p>
        <p data-lang="es">Spanish</p>
        <p data-lang="fr">French</p>
      </div>
    </div>        
    <section class="temperature__switch">
      <button class="temperature__switch_celsius celsius">°C</button>
      <button class="temperature__switch_fahrenheit fahrenheit">°F</button>
    </section>
    <button class="theme__switch"></button>
  </section>
  <section class="search">
    <input type="text" class="search__input" placeholder="${DATA_LANGUAGES_MAP.other.searchCity[lang]}">
    <button class="search__microphone"></button>
    <button class="search__button">${DATA_LANGUAGES_MAP.other.search[lang]}</button>
  </section>`
    return header;
  }
}

export default new Header()