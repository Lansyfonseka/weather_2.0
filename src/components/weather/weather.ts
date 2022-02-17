import './style/weather.scss';

import spiner from '../spinner/spinner';

class Weather {
  frame:HTMLElement
  constructor() {
    this.frame = document.createElement('div');
    this.frame.classList.add('weather');

    // this.frame.appendChild(spiner.render());
  }
  render() {
    return this.frame;
  }
}

export default new Weather()