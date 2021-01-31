import * as actions from './actions';

import lightTheme from '../../static/themes/lightTheme';
import darkTheme from '../../static/themes/darkTheme';
import killItWithFire from '../../static/themes/killItWithFire';

const typingReducer = (state, action) => {
  switch (action.type) {
    case actions.LIGHT_THEME: {
      localStorage.setItem('theme', lightTheme.themeName);
      return lightTheme;
    }
    case actions.DARK_THEME: {
      localStorage.setItem('theme', darkTheme.themeName);
      return darkTheme;
    }
    case actions.KILL_IT_WITH_FIRE: {
      localStorage.setItem('theme', killItWithFire.themeName);
      return killItWithFire;
    }
    default:
      return state;
  }
};

export default typingReducer;
