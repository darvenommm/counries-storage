import { SET_NEW_NAME, SET_NEW_REGION } from "./filtersConstans";

export const setNewNameAction = (name) => ({
  type: SET_NEW_NAME,
  payload: name,
});

export const setNewRegionAction = (region) => ({
  type: SET_NEW_REGION,
  payload: region,
});
