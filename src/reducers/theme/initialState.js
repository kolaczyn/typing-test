import nameToTheme from '../../static/themes';
import darkTheme from '../../static/themes/darkTheme';

const getInitialState = () => {
  const themeName = localStorage.getItem('theme');
  // default to darkTheme
  return themeName ? nameToTheme[themeName] : darkTheme;
};
export default getInitialState;
