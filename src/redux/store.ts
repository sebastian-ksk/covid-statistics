import { configureStore } from '@reduxjs/toolkit';
import { testSlice } from './sliceTest';

const store = configureStore({
  reducer: testSlice.reducer,
});

export default store;
