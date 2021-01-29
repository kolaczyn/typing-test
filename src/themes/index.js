import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import killItWithFire from './killItWithFire';
import * as themeNames from '../reducers/theme/actions';

const nameToTheme = {
  [themeNames.DARK_THEME]: darkTheme,
  [themeNames.LIGHT_THEME]: lightTheme,
  [themeNames.KILL_IT_WITH_FIRE]: killItWithFire,
};

export default nameToTheme;
