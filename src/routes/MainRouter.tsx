import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeTemplate } from '../features/Home/HomeTemplate';
import { CountriesPage } from '../pages/CountriesPage/index';
import { SingleCountriePage } from '../pages/SingleCountriePage/index';
import { SymptomsPage } from '../pages/SymptomsPage/index';

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
      <Route
        path='/symptoms'
        element={<SymptomsPage />}
      />
    </Routes>
  );
};
