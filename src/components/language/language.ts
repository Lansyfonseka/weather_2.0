import './style/language.scss'

class Language {
  constructor () {

  }
  init () {
    const button = document.querySelector('.language-select__header');
    const leanguage = button.parentElement;
    button.addEventListener('click', () => {
      leanguage.classList.toggle('active')
    });
  }
  render () {

  }
}

export default new Language;