import React from 'react';

import { CountriesList } from '../components/CountriesList/CountriesList';
import { SortPanel } from '../components/SortPanel/SortPanel';

export const Home = () => {
  return (
    <>
      <SortPanel />
      <CountriesList />
    </>
  );
}
