import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Template } from './pages/Template';
import { Home } from './pages/Home';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Template />}>
              <Route element={<Home />} index />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
