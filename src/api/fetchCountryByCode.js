import axios from 'axios';

const createPath = code => `https://restcountries.com/v2/alpha/${code}`;

export const fetchCountryByCode = code => (
  axios.get(createPath(code))
);
