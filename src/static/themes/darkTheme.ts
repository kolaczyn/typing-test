import Action from '../../reducers/theme/actions';
import ThemeType from './ThemeType';

// https://flatuicolors.com/palette/defo
const darkTheme: ThemeType = {
  palette: {
    box: '#2c3e50',
    border: '#27394B',
    background: '#34495e',
    text: '#ecf0f1',

    green: '#2ecc71',
    blue: '#3498db',
    red: '#f96454',
    yellow: '#f1c40f',
    lightGray: '#bdc3c7',
    darkGray: '#bdc3c7',
  },
  themeName: Action.DARK_THEME,
};

export default darkTheme;
