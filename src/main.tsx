/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { store } from './store/store';
import { appTheme } from './themes/themes';
import App from './App';

import './index.css';

const persistor = persistStore(store);

const MOUNT_NODE = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(MOUNT_NODE);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
