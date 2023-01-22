import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { rootPath, countryPath } from './constans/routerPath';

import { Template } from './pages/Template';
import { Home } from './pages/Home';
import { Country } from './pages/Country';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path={`${rootPath}`} element={<Template />}>
              <Route index element={<Home />} />
              <Route path={`${countryPath}:name`} element={<Country />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
