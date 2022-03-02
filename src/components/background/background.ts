import getImageUrl from '../../services/image.service';
import storage from '../storage/storage';
import './style/background.scss';

class Background {
  init () {
    const reloadImageButton = document.querySelector('.reload-image');
    reloadImageButton.addEventListener('click',this.reloadImage);
  }
  async reloadImage () {
    const {mainImageUrl, lowImageUrl} = await getImageUrl(await storage.loactionInfo.city);
    document.body.style.backgroundImage = `url('${lowImageUrl}')`;
    const image = new Image();
    image.src = mainImageUrl;
    image.onload = () => {
      document.body.style.backgroundImage = `url('${mainImageUrl}')`;
    }
  }
}

export default new Background;