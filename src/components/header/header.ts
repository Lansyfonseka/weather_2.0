import './style/header.scss'

import '../language/language'
import '../temperature/temperature'
import '../search/search'
import '../background/background'
import '../theme/theme-switch'

class Header {
  render () {
    return `
    <header class="header">
      <section class="switchers">
        <button class="reload-image"></button>
        <div class="language-select">
          <div class="language-select__header">
            <p data-language='eng'>belorussian</p>
          </div>
          <div class="language-select__body">
            <p data-language='eng'>english</p>
            <p data-language='eng'>russian</p>
            <p data-language='eng'>belorussian</p>
          </div>
        </div>        
        <section class="temperature__switch">
          <button class="temperature celsius">°C</button>
          <button class="temperature fahrenheit">°F</button>
        </section>
        <button class="theme__switch"></button>
      </section>
      <section class="search">
        <input type="text" class="search__input" placeholder="Search City">
        <button class="search__microphone"></button>
        <button class="search__button">Search</button>
      </section>
    </header>
    `
  }
}

export default new Header()