import React, { useState, useEffect } from 'react';

import { fetchCountryByCode } from '../../../api/fetchCountryByCode';

import { CountryLink } from '../../CountryLink/CountryLink';
import { Button } from '../../Button/Button';

export const CountryItem = ({ code }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountryByCode(code)
      .then(responce => setCountry(responce.data))
      .catch(error => setCountry(error));
  }, [code]);

  if (country === null) {
    return (
      <p>Loading...</p>
    );
  }

  if (country instanceof Error) {
    return (
      <p>{ country.name }: { country.message }</p>
    );
  }

  const name = country.name;

  return (
    <CountryLink name={name}>
      <Button>
        { name }
      </Button>
    </CountryLink>
  );
};
