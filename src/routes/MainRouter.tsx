import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeTemplate } from '../features/Home/HomeTemplate';

export const MainRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomeTemplate />}
      />
    </Routes>
  );
};
