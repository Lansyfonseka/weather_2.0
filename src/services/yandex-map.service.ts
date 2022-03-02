export default async function initYandexMap(latitude:number, longitude:number){
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('map');

  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';

  const main = document.querySelector('main');
  mainContainer.appendChild(mapContainer);
  main.appendChild(mainContainer);

  const response = await ymaps.ready();
  const myMap = await new ymaps.Map("map", {
    center: [latitude, longitude],
      zoom: 11
    });
  myMap.searchLocation = findPlace.bind(myMap);
  return myMap;
}

async function findPlace(searchCity:string) {
  if (!searchCity) {
    alert('Write any city');
  } else {
    const response = ymaps.geocode(searchCity,{result:1});
    const result = response.then( (res:{geoObjects:{get:Function}}) => {
      const firstGeoObject = res.geoObjects.get(0);
      if (!firstGeoObject) {
        alert('Nothing found');
        throw Error('Nothing found');
      }
      const latitude = firstGeoObject.geometry._coordinates[0]; 
      const longitude = firstGeoObject.geometry._coordinates[1];
      this.panTo([latitude,longitude],{delay:2000});
      return {
        location: {latitude,longitude},
        city: firstGeoObject.properties._data.name,
        country: firstGeoObject.properties._data.description
      }
    });
    return result;
  }
}