import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeoResponse } from 'shared/api/lib/types';
import { getLocalCities } from 'shared/common/utils';

type cityState = { city: IGeoResponse | null; cities: IGeoResponse[] };

const cities = getLocalCities();
const initialState: cityState = {
  city: null,
  cities: cities ? JSON.parse(cities) : [],
};
const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity(state, { payload }: PayloadAction<IGeoResponse>) {
      state.city = payload;
    },
    setCities(state, { payload }: PayloadAction<IGeoResponse[]>) {
      state.cities = payload;
    },
    addFavCity(state, { payload }: PayloadAction<IGeoResponse>) {
      state.cities.push(payload);
    },
  },
});

export const { setCity, setCities, addFavCity } = citySlice.actions;
export default citySlice;
