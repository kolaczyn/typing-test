import nameToTheme from '../../themes';
import darkTheme from '../../themes/darkTheme';

const getInitialState = () => {
  const themeName = localStorage.getItem('theme');
  // default to darkTheme
  return themeName ? nameToTheme[themeName] : darkTheme
}
export default getInitialState;