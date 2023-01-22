import { ADD_COUNTRIES, SET_STATUS, SET_ERROR } from "./countriesConstans";
import { LOADING } from "../../constans/statuses";
import { fetchCounties } from "../../api/fetchCountries";

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

export const fetchCountiesAction = (dispatch) => {
  dispatch(setStatusAction(LOADING));

  fetchCounties()
    .then(response => dispatch(addCountriesAction(response.data)))
    .catch(error => dispatch(setErrorAction(error)));
};
