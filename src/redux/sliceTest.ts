import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    status: 'ok',
  },
  reducers: {
    test: (state, { payload }) => {
      state.status = 'okx2';
    },
  },
});

export const { test } = testSlice.actions;
