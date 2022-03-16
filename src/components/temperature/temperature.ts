import spinner from '../spinner/spinner';
import storage from '../storage/storage';
import weather from '../weather/weather';
import './style/temperature.scss';

class Temperature {
  init() {
    const buttonContainer = document.querySelector('.temperature__switch');
    const celsius = buttonContainer.firstElementChild;
    const fahrenheit = celsius.nextElementSibling;
    const activeClass = 'active';

    if (storage.isCelsius) celsius.classList.add(activeClass);
    else fahrenheit.classList.add(activeClass);

    buttonContainer.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON') {
        const activeButton = buttonContainer.querySelector(`.${activeClass}`);
        activeButton.classList.remove(activeClass);
        target.classList.add(activeClass);
        this.changeTemperature();
      }
    });
  }
  changeTemperature() {
    spinner.show();
    storage.isCelsius = !storage.isCelsius;
    localStorage.isCelsius = storage.isCelsius;
    weather.unmount();
    weather.render(storage.weather, storage.lang);
    weather.init();
    spinner.hide();
  }
}

export default new Temperature();
