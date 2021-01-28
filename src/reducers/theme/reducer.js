import * as actions from './actions';

import lightTheme from '../../themes/lightTheme';
import darkTheme from '../../themes/darkTheme';
import killItWithFire from '../../themes/killItWithFire';

const typingReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_LIGHT_THEME: {
      return lightTheme;
    }
    case actions.SET_DARK_THEME: {
      return darkTheme;
    }
    case actions.SET_KILL_IT_WITH_FIRE: {
      return killItWithFire;
    }
    default:
      return state;
  }
}

export default typingReducer;
