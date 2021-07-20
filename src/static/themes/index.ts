import Action from '../../reducers/theme/actions';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import killItWithFire from './killItWithFire';
import ThemeType from './ThemeType';

const nameToTheme: Record<string, ThemeType> = {
  [Action.DARK_THEME]: darkTheme,
  [Action.LIGHT_THEME]: lightTheme,
  [Action.KILL_IT_WITH_FIRE]: killItWithFire,
};

export default nameToTheme;
