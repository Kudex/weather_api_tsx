type WeatherDataDTO = {
  co: number;
  aqi: number;
  predominant_pollen_type: string;
};

export type SingeCityWeatherDTO = {
  city_name: string;
  country_code: string;
  lat: number;
  lon: number;
  state_code: string;
  timezone: string;
  data: WeatherDataDTO[];
};
