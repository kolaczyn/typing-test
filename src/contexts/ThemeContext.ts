import { createContext, Dispatch } from 'react';
import ThemeType from '../static/themes/ThemeType';
import { ThemeAction } from '../reducers/theme/reducer';

export default createContext<{
  state: ThemeType;
  dispatch: Dispatch<ThemeAction>;
} | null>(null);
