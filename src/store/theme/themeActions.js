import { SET_NEW_THEME } from "./themeConstans";

export const setNewThemeAction = (newTheme) => ({
  type: SET_NEW_THEME,
  payload: newTheme,
});
