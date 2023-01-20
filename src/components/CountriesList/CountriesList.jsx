import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { countriesSelector, countriesStatusSelector, countriesErrorSelector } from '../../store/countries/countriesSelectors';
import { fetchCountiesAction } from '../../store/countries/countriesActions';

import { Container } from '../Container/Container';
import { Wrapper } from './elements/Wrapper';
import { CountryItem } from '../CountryItem/CountryItem';

import { Info } from './elements/Info';

import { LOADING, ERROR } from '../../constans/statuses';


export const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector(countriesSelector);
  const status = useSelector(countriesStatusSelector);
  const error = useSelector(countriesErrorSelector);

  useEffect(() => {
    dispatch(fetchCountiesAction)
  }, [dispatch]);

  if (status === LOADING) {
    return (
      <Info>Loading...</Info>
    );
  }

  if (status === ERROR) {
    return (
      <Info>{ error.name }: { error.message }</Info>
    );
  }

  const countriesElements = countries.map(country => (
    <CountryItem
      key={country.name.common}
      name={country.name.common}
      population={country.population}
      region={country.region}
      capital={country.capital}
      imageSrc={country.flags.svg}
    />
  ));

  return (
    <Container>
      <Wrapper>
        { countriesElements }
      </Wrapper>
    </Container>
  );
};
