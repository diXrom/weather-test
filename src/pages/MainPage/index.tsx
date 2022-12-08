import { useGetWeatherQuery } from 'shared/api';
import { useAppSelector, useAppDispatch } from 'shared/store/model/hooks';
import { GiSelfLove } from 'react-icons/gi';
import clsx from 'clsx';
import { addFavCity, setCities } from 'shared/store/model/citySlice';
import Card from 'shared/components/Card';
import { motion } from 'framer-motion';
import { fade, variants } from 'shared/common/styles';
import {
  BsFillCloudLightningRainFill,
  BsFillCloudDrizzleFill,
  BsFillCloudRainFill,
  BsFillCloudFill,
  BsFillCloudSnowFill,
  BsFillSunFill,
} from 'react-icons/bs';
import useMainPage from './model/useMainPage';

const weathers = {
  Thunderstorm: <BsFillCloudLightningRainFill className="w-8 h-8" />,
  Drizzle: <BsFillCloudDrizzleFill className="w-8 h-8" />,
  Rain: <BsFillCloudRainFill className="w-8 h-8" />,
  Snow: <BsFillCloudSnowFill className="w-8 h-8" />,
  Clear: <BsFillSunFill className="w-8 h-8" />,
  Clouds: <BsFillCloudFill className="w-8 h-8" />,
};

const MainPage = () => {
  const { getDirection, toggleFav, options, cityData, city, findCity } = useMainPage();

  if (!cityData) return null;

  return (
    <motion.div className="flex flex-col justify-center h-full gap-5" variants={fade} {...variants}>
      <div className="flex items-center justify-center gap-2 select-none">
        <h1 className="text-2xl font-bold text-center">{city?.name}</h1>
        <GiSelfLove
          className={clsx(
            'w-5 h-5 transition hover:scale-110 active:scale-100',
            findCity ? 'text-red-500' : ''
          )}
          onClick={toggleFav}
        />
      </div>
      <div className="grid justify-center grid-cols-3 gap-2">
        {cityData.list.map(item => (
          <Card key={item.dt} className="text-lg text-center">
            <div className="text-lg font-bold text-center">
              {new Date(item.dt * 1000).toLocaleDateString('en-US', options).toUpperCase()}
            </div>
            <div className="flex justify-center">
              {weathers[item.weather[0].main as keyof typeof weathers]}
            </div>
            <div>{item.weather[0].description.replace(/./, ch => ch.toUpperCase())}</div>
            <div>Avg.temp: {Math.round(item.main.temp - 273.15)} °C</div>
            <div>Pressure: {item.main.pressure} mb</div>
            <div>Wind speed: {Math.ceil(item.wind.speed)} m/s</div>
            <div>Wind direct.: {getDirection(item.wind.deg)}</div>
            <div>Humidity: {item.main.humidity} %</div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default MainPage;
