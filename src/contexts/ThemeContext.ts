import { createContext, Dispatch } from 'react';
import ThemeType from '../static/themes/ThemeType';
import { ThemeAction } from '../reducers/theme/reducer';
import darkTheme from '../static/themes/lightTheme';

export default createContext<{
  state: ThemeType;
  dispatch: Dispatch<ThemeAction>;
}>({
  state: darkTheme,
  dispatch: () => null,
});
