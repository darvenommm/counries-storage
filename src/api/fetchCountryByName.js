import axios from 'axios';

const createPath = name => `https://restcountries.com/v2/name/${name}?fullText=true`;

export const fetchCountryByName = name => (
  axios.get(createPath(name))
);
