import getImageUrl from '../../services/image.service';
import './style/background.scss';

class Background {
  init () {
    const reloadImageButton = document.querySelector('.reload-image');
    reloadImageButton.addEventListener('click',this.reloadImage);
  }
  reloadImage () {
    getImageUrl();
  }
}

export default new Background;