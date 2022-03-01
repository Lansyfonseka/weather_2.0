import spinner from "../components/spinner/spinner";
import storage from "../components/storage/storage";
import weather from "../components/weather/weather";
import getWeather from "./weather.service";

export default async function initYandexMap(latitude:number, longitude:number){
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('map');

  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';

  const main = document.querySelector('main');
  mainContainer.appendChild(mapContainer);
  main.appendChild(mainContainer);

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
    spinner.show();  
    ymaps.geocode(searchCity,{result:1}).then( (res:{geoObjects:{get:Function}}) => {
        const firstGeoObject = res.geoObjects.get(0);
        if (!firstGeoObject) {
          alert('Nothing found');
          throw Error('Nothing found');
        }        
        const latitude = firstGeoObject.geometry._coordinates[0]; 
        const longitude = firstGeoObject.geometry._coordinates[1];
        this.panTo([latitude,longitude],{delay:2000});
        storage.loactionInfo.location = {latitude,longitude};
        storage.loactionInfo.city = firstGeoObject.properties._data.name;
        storage.loactionInfo.country = firstGeoObject.properties._data.description;
      }
    );
    weather.unmount();
    storage.weather = await getWeather(storage.loactionInfo.location);
    weather.render(await storage.weather);
    // weather.init();
    spinner.hide();
  }
}