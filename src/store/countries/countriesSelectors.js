import { intersection } from "lodash";

import { regionsWithToLowerCase } from "../../constans/regions";

export const countriesSelector = state => state.countries.data;
export const countriesStatusSelector = state => state.countries.status;
export const countriesErrorSelector = state => state.countries.error;

export const countriesByRegionSelector = (state, region) => {
  const countries = countriesSelector(state);

  if (!regionsWithToLowerCase.includes(region.toLowerCase())) {
    return countries;
  }

  return countries.filter(country => (
    country.region.toLowerCase() === region.toLowerCase()
  ));
};

export const countriesByNameSelector = (state, name) => {
  const countries = countriesSelector(state);

  if (name === '') {
    return countries;
  }

  return countries.filter(country => (
    country.name.toLowerCase().includes(name.toLowerCase())
  ));
};

export const countriesByRegionAndNameSelector = (state, region, name) => {
  const countriesByRegion = countriesByRegionSelector(state, region);
  const countriesByName = countriesByNameSelector(state, name);

  return intersection(countriesByRegion, countriesByName);
};
