import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import App from 'components/App/App';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';
import { theme } from './constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toaster position="top-right" />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
