import { configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from '../features/Countries/redux/sliceCountries';
import { homeSlice } from '../features/Home/redux/HomeSlice';
import { singCountSlice } from '../features/SingleCountrie/redux/SliceSingleCountry';
import { symptSlice } from '../features/Symptoms/redux/sliceSymptomps';
import { testSlice } from './sliceTest';

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    countries: countriesSlice.reducer,
    singCountry: singCountSlice.reducer,
    symptoms: symptSlice.reducer,
  },
});

export default store;
