import storage from "../components/storage/storage";

export default async function initYandexMap(latitude:number, longitude:number){
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('map');

  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';

  const main = document.querySelector('main');
  mainContainer.appendChild(mapContainer);
  main.appendChild(mainContainer);

  let myMap;
  ymaps.ready().then(() => {
    myMap = new ymaps.Map("map", {
      center: [latitude, longitude],
      zoom: 11
    });
    myMap.searchLocation = findPlace.bind(myMap)
    storage.myMap = myMap;
  });
}

function findPlace(searchCity:string) {
  if (!searchCity) {
    alert('Write any city');
  } else
  ymaps.geocode(searchCity,{result:1}).then( (res:{geoObjects:{get:Function}}) => {
      const firstGeoObject = res.geoObjects.get(0);
      if (!firstGeoObject) {
        alert('Nothing found');
        throw Error('Nothing found');
      }
      console.log(firstGeoObject)
      const bounds = firstGeoObject.properties.get('boundedBy');
      this.setBounds(bounds, {
        checkZoomRange: true
      });
    }
  )
}