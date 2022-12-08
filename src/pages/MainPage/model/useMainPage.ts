import { useGetWeatherQuery } from 'shared/api';
import { setCities, addFavCity } from 'shared/store/model/citySlice';
import { useAppDispatch, useAppSelector } from 'shared/store/model/hooks';

const useMainPage = () => {
  const dispatch = useAppDispatch();
  const city = useAppSelector(state => state.citySlice.city);
  const cities = useAppSelector(state => state.citySlice.cities);
  const findCity = cities.find(item => item.name === city?.name);

  const getDirection = (deg: number) => {
    return ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'][Math.round(deg / 45) % 8];
  };
  const toggleFav = () => {
    if (!city) return;
    if (findCity) return dispatch(setCities(cities.filter(item => item.name !== city.name)));
    dispatch(addFavCity({ name: city.name, lat: city.lat, lon: city.lon }));
  };
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'short', day: 'numeric' };
  const { data: cityData } = useGetWeatherQuery(
    { lat: city?.lat || 0, lon: city?.lon || 0 },
    { skip: !city }
  );
  return { getDirection, toggleFav, options, cityData, city, findCity };
};

export default useMainPage;
