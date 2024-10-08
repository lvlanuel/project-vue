import { useWeatherStore } from "../stores/weatherStore";
import { getTemperatura } from "../helpers/getWeather";

export const useweather = async () => {
  const temperatura = await getTemperatura();
  const weatherStore = useWeatherStore();
  weatherStore.temperatura = temperatura;
};
