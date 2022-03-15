declare namespace ymaps {
  export function ready(): Function;
  export function geocode(seacrhCity:string, confin:SearchConfig):Promise;

  class Promise {
    public Map(element: string | any, state: MapState):Map;
    then(onFulfilled?: Function, onRejected?: Function, onProgress?: Function, searchLocation?:Function, ctx?: any):{
      location: {latitude:number, longitude:number};
      city: string;
      country?: string;
    }
  }

  export class Map {
    constructor(element: string | any, state: MapState);
    public searchLocation():void
  }

  export class MapState {
    center: number[];
    zoom: number;
  }

  export class SearchConfig {
    result: number;
  }
}