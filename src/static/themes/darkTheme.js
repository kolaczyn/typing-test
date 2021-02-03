import { DARK_THEME } from '../../reducers/theme/actions';

const darkTheme = {
  // TODO start using gradients inspired by WaniKani's website
  palette: {
    box: '#222',
    border: '#1c1e21',
    background: '#303030',
    lightGray: 'bisque',
    green: '#55efc4',
    blue: '#00a1e4',
    red: '#e17055',
    text: '#fff',
  },
  containerWidth: '768px',
  borderRadius: '0.75rem',
  themeName: DARK_THEME,
};

export default darkTheme;
