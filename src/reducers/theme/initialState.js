import nameToTheme from '../../themes';
import darkTheme from '../../themes/darkTheme';

const getInitialState = () => {
  const themeName = localStorage.getItem('theme');
  // default to darkTheme is the theme is not yet set
  return themeName ? nameToTheme[themeName] : darkTheme
}
export default getInitialState;