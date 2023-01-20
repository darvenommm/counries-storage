import { SET_NEW_THEME } from "./themeConstans";
import { LIGHT_THEME } from "../../constans/themes";

const initialState = LIGHT_THEME;

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_THEME:
      return action.payload;

    default:
      return state;
  }
};
