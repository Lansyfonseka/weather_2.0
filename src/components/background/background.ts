import getImageUrl from '../../services/image.service';
import storage from '../storage/storage';
import './style/background.scss';

class Background {
  reloadImageButton: HTMLElement;
  reloadImageIcon: HTMLElement;
  init () {
    this.reloadImageButton = document.querySelector('.reload-image');
    this.reloadImageIcon = this.reloadImageButton.querySelector('.reload-image__icon');
    this.reloadImage = this.reloadImage.bind(this);
    this.reloadImageButton.addEventListener('click',this.reloadImage);
  }
  async reloadImage () {
    this.reloadImageIcon.classList.add('rotate');
    const {mainImageUrl, lowImageUrl} = await getImageUrl(storage.locationInfo.city);
    const lowImage = new Image();
    const mainImage = new Image();
    lowImage.src = lowImageUrl;
    mainImage.src = mainImageUrl;
    lowImage.onload = () => {
      document.body.style.backgroundImage = `url('${lowImageUrl}')`;
      mainImage.onload = () => {
        document.body.style.backgroundImage = `url('${mainImageUrl}')`;
        this.reloadImageIcon.classList.remove('rotate');
      }
    }
  }
}

export default new Background;