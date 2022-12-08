import { configureStore } from '@reduxjs/toolkit';
import { weatherAPI } from 'shared/api';
import citySlice from './model/citySlice';

export const store = configureStore({
  reducer: {
    [weatherAPI.reducerPath]: weatherAPI.reducer,
    citySlice: citySlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherAPI.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
