import Action from '../../reducers/theme/actions';
import ThemeType from './ThemeType';

const darkTheme: ThemeType = {
  palette: {
    box: '#fbf1c7',
    border: 'white',
    background: '#f9f5d7',
    text: '#3c3836',

    green: '#689d6a',
    blue: '#98ded9',
    red: '#cc241d',
    yellow: '#e8e9a1',
    lightGray: '929374',
  },
  themeName: Action.LIGHT_THEME,
};

export default darkTheme;
