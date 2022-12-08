import { STORAGE_TOKEN } from './constants';

const getLocalCities = () => localStorage.getItem(STORAGE_TOKEN);
const setLocalCities = (token: string) => localStorage.setItem(STORAGE_TOKEN, token);

export { getLocalCities, setLocalCities };
