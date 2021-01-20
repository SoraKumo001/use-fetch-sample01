export interface WeatherType {
  error?: string;
  publicTime: string;
  publicTime_format: string;
  title: string;
  link: string;
  description: Description;
  forecasts: Forecast[];
  location: Location;
  copyright: Copyright;
}

export interface Copyright {
  link: string;
  title: string;
  image: Image;
  provider: Provider[];
}

export interface Image {
  width: number;
  height: number;
  link?: string;
  url: string;
  title: string;
}

export interface Provider {
  link: string;
  name: string;
  note: string;
}

export interface Description {
  text: string;
  publicTime: string;
  publicTime_format: string;
}

export interface Forecast {
  date: string;
  dateLabel: string;
  telop: string;
  temperature: Temperature;
  chanceOfRain: ChanceOfRain;
  image: Image;
}

export interface ChanceOfRain {
  '00-06': string;
  '06-12': string;
  '12-18': string;
  '18-24': string;
  T00_06: string;
  T06_12: string;
  T12_18: string;
  T18_24: string;
}

export interface Temperature {
  min: Max | null;
  max: Max | null;
}

export interface Max {
  celsius: string;
  fahrenheit: string;
}

export interface Location {
  city: string;
  area: string;
  prefecture: string;
}
