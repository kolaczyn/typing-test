import { KILL_IT_WITH_FIRE } from '../../reducers/theme/actions';
import ThemeType from './ThemeType';

const darkTheme: ThemeType = {
  palette: {
    box: 'green',
    border: 'pink',
    background: 'orangered',
    text: 'white',

    green: '#55efc4',
    blue: 'blue',
    red: '#e17055',
    yellow: 'yellow',
    lightGray: 'bisque',
  },
  themeName: KILL_IT_WITH_FIRE,
};

export default darkTheme;
