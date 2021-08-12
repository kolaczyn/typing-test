import Action from '../../reducers/theme/actions';
import ThemeType from './ThemeType';

// https://flatuicolors.com/palette/cn
const darkTheme: ThemeType = {
  palette: {
    box: '#f1f2f6',
    border: '#dfe4ea',
    background: '#ffffff',
    text: '#2f3542',

    green: '#2ed573',
    blue: '#70a1ff',
    red: '#ff6b81',
    yellow: '#eccc68',
    lightGray: '#a4b0be',
  },
  themeName: Action.LIGHT_THEME,
};

export default darkTheme;
