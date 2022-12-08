import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGeoResponse, IWeatherResponse } from './lib/types';
import { prepareHeaders } from './lib/util';
import { API_KEY, API_PATH, API_URL } from './model/constants';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, prepareHeaders }),
  tagTypes: [],
  endpoints: build => ({
    getGeo: build.mutation<IGeoResponse, string>({
      query: q => ({ url: API_PATH.GEO, params: { q, limit: 5, appid: API_KEY } }),
      transformResponse: (resp: IGeoResponse[]) => resp[0],
    }),
    getWeather: build.query<IWeatherResponse, Omit<IGeoResponse, 'name'>>({
      query: params => ({ url: API_PATH.WEATHER, params: { ...params, appid: API_KEY } }),
      transformResponse: (resp: IWeatherResponse) => ({
        ...resp,
        list: resp.list.filter(day => /12:00:00/.test(day.dt_txt)),
      }),
    }),
  }),
});

export const { useGetGeoMutation, useGetWeatherQuery } = weatherAPI;
