import storage from '../storage/storage';
import './style/theme-switch.scss';

class ThemeSwitch {
  button: HTMLElement;
  app: HTMLElement;
  constructor() {
    this.changeTheme = this.changeTheme.bind(this);
  }
  init() {
    this.button = document.querySelector('.theme__switch');
    this.app = document.querySelector('.app');
    this.button.addEventListener('click', this.changeTheme);

    if (storage.isDark) {
      this.button.classList.toggle('active');
      this.app.classList.toggle('dark');
    }
  }
  changeTheme() {
    this.button.classList.toggle('active');
    this.app.classList.toggle('dark');
    storage.isDark = !storage.isDark;
    localStorage.isDark = storage.isDark;
  }
}

export default new ThemeSwitch();
