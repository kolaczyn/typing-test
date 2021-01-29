import * as actions from './actions';

import lightTheme from '../../themes/lightTheme';
import darkTheme from '../../themes/darkTheme';
import killItWithFire from '../../themes/killItWithFire';

const typingReducer = (state, action) => {
  switch (action.type) {
    case actions.LIGHT_THEME: {
      return lightTheme;
    }
    case actions.DARK_THEME: {
      return darkTheme;
    }
    case actions.KILL_IT_WITH_FIRE: {
      return killItWithFire;
    }
    default:
      return state;
  }
}

export default typingReducer;
