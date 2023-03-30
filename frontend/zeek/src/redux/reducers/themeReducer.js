import { TOGGLE_THEME } from "../actions/actionTypes";

const initialTheme = {
  isLightTheme: true,
}

const ThemeReducer = (state = initialTheme, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { isLightTheme: !state.isLightTheme};

    default:
      return state;
  }
}
export default ThemeReducer;
