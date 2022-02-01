export default async function initYandexMap(latitude:number, longitude:number){
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('map');

  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';

  const main = document.querySelector('main');
  mainContainer.appendChild(mapContainer);
  main.appendChild(mainContainer);

  ymaps.ready().then(() => {
    let myMap = new ymaps.Map("map", {
      center: [latitude, longitude],
      zoom: 11
    });
  });
}