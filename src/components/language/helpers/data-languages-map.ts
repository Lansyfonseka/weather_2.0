export const DATA_LANGUAGES_MAP: { 
  week: { [key:string]:Array<string> },
  shortWeek: { [key:string]:Array<string> },
  month: { [key:string]:Array<string> },
  other: { [key:string]:{[key:string]:string} }
} = {
  week: {
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ru: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    es: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    fr: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
  },
  shortWeek: {
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    es: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    fr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  },
  month: {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  },
  other: {
    search: {
      en: "Search",
      ru: "Поиск",
      es: "Búsqueda",
      fr: "Rechercher"
    },
    searchCity: {
      en: "Search city",
      ru: "Поиск города",
      es: "Buscar ciudad",
      fr: "Rechercher une ville"
    },
    feels: {
      en: "Feels like",
      ru: "Ощущается",
      es: "Se siente como",
      fr: "Se sent comme"
    },
    windSpeed: {
      en: "Wind speed",
      ru: "Скорость ветра",
      es: "Velocidad del viento",
      fr: "Vitesse du vent"
    },
    wind: {
      en: "Wind",
      ru: "Ветер",
      es: "Viento",
      fr: "Vent"
    },
    speed: {
      en: "m/s",
      ru: "м/с",
      es: "m/s",
      fr: "m/s"
    },
    length: {
      en: "m",
      ru: "м",
      es: "m",
      fr: "m"
    },
    rain: {
      en: "Rain",
      ru: "Дождь",
      es: "Lluvia",
      fr: "Pluie"
    },
    humidity: {
      en: "Humidity",
      ru: "Влажность",
      es: "Humedad",
      fr: "Humidité"
    },
    visibility: {
      en: "Visibility",
      ru: "Видимость",
      es: "Visibilidad",
      fr: "Visibilité"
    },
    uvIndex: {
      en: "UV-index",
      ru: "УФ-индекс",
      es: "UV-Índice",
      fr: "UV-Indice"
    },
    day: {
      en: "Day",
      ru: "День",
      es: "Dia",
      fr: "Jour"
    },
    night: {
      en: "Night",
      ru: "Ночь",
      es: "Noche",
      fr: "Nuit"
    }
  }
}