import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeTemplate } from '../features/Home/HomeTemplate';
import { CountriesPage } from '../pages/CountriesPage/index';
import { SingleCountriePage } from '../pages/SingleCountriePage/index';

export const MainRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomeTemplate />}
      />
      <Route
        path='/countries'
        element={<CountriesPage />}
      />
      <Route
        path='/singleCountrie'
        element={<SingleCountriePage />}
      />
    </Routes>
  );
};
