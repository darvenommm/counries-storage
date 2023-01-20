import { ADD_COUNTRIES, SET_STATUS, SET_ERROR } from "./countriesConstans";
import { LOADING } from "../../constans/statuses";
import { COUNTRIES_URL } from '../../constans/apiUrl';

const addCountriesAction = (countries) => ({
  type: ADD_COUNTRIES,
  payload: countries,
});

const setStatusAction = (status) => ({
  type: SET_STATUS,
  payload: status,
});

const setErrorAction = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const fetchCountiesAction = (dispatch, _, { client }) => {
  dispatch(setStatusAction(LOADING));

  client
    .get(COUNTRIES_URL)
    .then(response => dispatch(addCountriesAction(response.data)))
    .catch(error => dispatch(setErrorAction(error)));
};
