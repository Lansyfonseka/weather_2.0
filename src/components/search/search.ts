import storage from '../storage/storage';
import './style/search.scss'

class Search {
  searchInput: HTMLInputElement;
  searchButton: HTMLElement;
  constructor () {
    this.search = this.search.bind(this)
  }
  init () {
    this.searchInput = document.querySelector('.search__input');
    this.searchButton = document.querySelector('.search__button');

    this.searchButton.addEventListener('click',this.search);
    window.addEventListener('keydown',(event) => {
      const keyCodeEnter = 'Enter';
      if (!event.repeat && event.key === keyCodeEnter)
        this.search();
    })
  }
  search () {
    const searchCity:string = this.searchInput.value;
    storage.myMap.searchLocation(searchCity);
  }

  render () {

  }
}

export default new Search();