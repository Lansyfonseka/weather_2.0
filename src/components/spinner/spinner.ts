import './style/spinner.scss'

class Spinner {
  body:HTMLElement;
  constructor (){

    this.body = document.createElement('div');
    this.body.classList.add('spinner');

    const water = document.createElement('div');
    water.classList.add('water');

    this.body.appendChild(water)
  }
  show() {
    this.body.style.display = 'block';
  }
  hide() {
    this.body.style.display = 'none';
  }
  render() {
    return this.body;
  }
}

export default new Spinner();