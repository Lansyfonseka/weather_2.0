import './style/theme-switch.scss';

class ThemeSwitch {
  button:HTMLElement;
  app:HTMLElement;
  constructor () {
    this.changeTheme = this.changeTheme.bind(this);
  }
  init () {
    this.button = document.querySelector('.theme__switch');
    this.app = document.querySelector('.app');
    this.button.addEventListener('click',this.changeTheme);
  }
  changeTheme () {    
    this.button.classList.toggle('active');
    this.app.classList.toggle('dark');
  }
  render () {

  }
}

export default new ThemeSwitch()