import Action from '../../reducers/theme/actions';
import ThemeType from './ThemeType';

const darkTheme: ThemeType = {
  palette: {
    box: '#222',
    border: '#1c1e21',
    background: '#303030',
    text: '#fff',

    green: '#55efc4',
    blue: '#00a1e4',
    red: '#e17055',
    yellow: '#e8e9a1',
    lightGray: 'bisque',
  },
  themeName: Action.DARK_THEME,
};

export default darkTheme;
