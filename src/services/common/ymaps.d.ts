declare namespace ymaps {
  export function ready(): Promise;
  export function geocode(seacrhCity:string, confin:SearchConfig):Promise;

  class Promise {
    then(onFulfilled?: Function, onRejected?: Function, onProgress?: Function, ctx?: any): Promise;
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