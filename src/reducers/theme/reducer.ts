import Action from './actions';

import lightTheme from '../../static/themes/lightTheme';
import darkTheme from '../../static/themes/darkTheme';
import killItWithFire from '../../static/themes/killItWithFire';
import ThemeType from '../../static/themes/ThemeType';

export type ThemeAction = {
  type: Action;
};

const themeReducer = (state: ThemeType, action: ThemeAction): ThemeType => {
  switch (action.type) {
    case Action.LIGHT_THEME: {
      localStorage.setItem('theme', lightTheme.themeName);
      return lightTheme;
    }
    case Action.DARK_THEME: {
      localStorage.setItem('theme', darkTheme.themeName);
      return darkTheme;
    }
    case Action.KILL_IT_WITH_FIRE: {
      localStorage.setItem('theme', killItWithFire.themeName);
      return killItWithFire;
    }
    default:
      return state;
  }
};

export default themeReducer;
