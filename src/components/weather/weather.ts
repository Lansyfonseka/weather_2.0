import './style/weather.scss';

import spiner from '../spinner/spinner';

class Weather {
  frame:HTMLElement
  constructor() {
    this.frame = document.createElement('div');
    this.frame.classList.add('weather');

    // this.frame.appendChild(spiner.render());
  }
  init() {
    const button = document.querySelector('.arrow');
    const waetherToday = button.parentElement;
    button.addEventListener('click', () => {
      console.log('Details')
      waetherToday.classList.toggle('full-description')
    })
  }
  render() {
    return this.frame;
  }
}

export default new Weather()