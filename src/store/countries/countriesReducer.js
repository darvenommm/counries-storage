import { ADD_COUNTRIES, SET_STATUS, SET_ERROR } from "./countriesConstans";
import { READY, ERROR } from "../../constans/statuses";

const initialState = {
  data: [],
  status: READY,
  error: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRIES:
      return {
        ...state,
        data: action.payload,
        status: READY,
        error: null,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        status: ERROR,
        error: action.payload,
      };

    default:
      return state;
  }
};
