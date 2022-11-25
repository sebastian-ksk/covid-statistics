import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    status: 'ok',
    totalConfirmed: 0,
    lastConfirmed: 0,
    totalDeath: 0,
    lastDeath: 0,
    totalRecovered: 0,
    lastRecovered: 0,
  },
  reducers: {
    completeGeneralData: (state, { payload }) => {
      state.status = 'getData';
      state.totalConfirmed = payload.TotalConfirmed;
      state.lastConfirmed = payload.NewConfirmed;
      state.totalDeath = payload.TotalDeaths;
      state.lastDeath = payload.NewDeaths;
      state.totalRecovered = payload.TotalRecovered;
      state.lastRecovered = payload.NewRecovered;
    },
  },
});

export const { completeGeneralData } = homeSlice.actions;
