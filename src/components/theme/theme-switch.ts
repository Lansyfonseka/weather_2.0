import './style/theme-switch.scss';

class ThemeSwitch {
  button:HTMLElement;
  constructor () {
    this.changeTheme = this.changeTheme.bind(this)
  }
  init () {
    this.button = document.querySelector('.theme__switch');
    this.button.addEventListener('click',this.changeTheme)
  }
  changeTheme () {
    this.button.classList.toggle('active');
    document.body.classList.toggle('dark');
  }
  render () {

  }
}

export default new ThemeSwitch()