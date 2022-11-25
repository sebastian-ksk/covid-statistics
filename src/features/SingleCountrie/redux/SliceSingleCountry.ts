import { createSlice } from '@reduxjs/toolkit';

export const singCountSlice = createSlice({
  name: 'singCountry',
  initialState: {
    status: 'ok',
    country: '',
    registers: [],
  },
  reducers: {
    selectCountry: (state, { payload }) => {
      state.country = payload.country;
      state.registers = payload.registers;
    },
  },
});

export const { selectCountry } = singCountSlice.actions;
