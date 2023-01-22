import axios from "axios";

const COUNTRIES_URL = 'https://restcountries.com/v2/all?fields=name,population,capital,region,flags';

export const fetchCounties = () => axios.get(COUNTRIES_URL);
