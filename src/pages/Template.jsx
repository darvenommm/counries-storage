import React, { useLayoutEffect } from 'react';

import { useSelector } from 'react-redux';
import { themeSelector } from '../store/theme/themeSelectors';

import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header/Header';

import { DATA_NAME, LIGHT_THEME, DARK_THEME } from '../constans/themes';

export const Template = () => {
  const theme = useSelector(themeSelector);

  useLayoutEffect(() => {
    document.body.setAttribute(
      DATA_NAME,
      theme === LIGHT_THEME
        ? LIGHT_THEME
        : DARK_THEME
    );
  }, [theme]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
