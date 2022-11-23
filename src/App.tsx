import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from './redux/store';
import { MainRouter } from './routes/MainRouter';
import { AppTheme } from './theme';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={AppTheme}>
          <MainRouter />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
