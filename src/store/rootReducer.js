import { combineReducers } from "redux";

import { themeReducer } from "./theme/themeReducer";
import { countriesReducer } from "./countries/countriesReducer";
import { filtersReducer } from "./filters/filtersReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  filters: filtersReducer,
});
