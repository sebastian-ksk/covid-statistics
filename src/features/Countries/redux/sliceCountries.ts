import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    status: 'ok',
    listCountries: [],
    dataCountries: [],
  },
  reducers: {
    allcountries: (state, { payload }) => {
      state.listCountries = payload;
    },
    dataAllcountries: (state, { payload }) => {
      const { data } = payload;

      state.dataCountries = data;
    },
  },
});

export const { allcountries, dataAllcountries } = countriesSlice.actions;
