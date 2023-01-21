import { SET_NEW_NAME, SET_NEW_REGION } from "./filtersConstans";
import { ALL } from "../../constans/regions";

const initialState = {
  region: ALL,
  name: '',
};

export const filtersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_NEW_REGION:
      return {
        ...state,
        region: actions.payload,
      };

    case SET_NEW_NAME:
      return {
        ...state,
        name: actions.payload,
      };

    default:
      return state;
  }
};
