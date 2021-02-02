/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';

import ThemeContext from '../../../contexts/ThemeContext';
import {
  DARK_THEME,
  KILL_IT_WITH_FIRE,
  LIGHT_THEME,
} from '../../../reducers/theme/actions';

export default function ChooseTheme() {
  const { state, dispatch } = useContext(ThemeContext);
  // I dont know why I have to call the state, but whatever
  // FIXME cometimes I get 'state is not a function' after entering settings page
  const [checkedOption, setCheckedOption] = useState(() => state().themeName);

  const isChecked = (label) => checkedOption === label;
  const onValueChange = (e) => {
    setCheckedOption(e.target.value);
    dispatch({
      type: e.target.value,
    });
  };

  return (
    <section>
      {/* that's why I hate dealing with forms without a library in React */}
      <input
        type="radio"
        checked={isChecked(DARK_THEME)}
        onChange={onValueChange}
        value={DARK_THEME}
        id="darkTheme"
        name="darkTheme"
      />
      <label htmlFor="darkTheme">Dark Theme</label>
      <br />

      <input
        type="radio"
        checked={isChecked(LIGHT_THEME)}
        onChange={onValueChange}
        value={LIGHT_THEME}
        id="lightTheme"
        name="lightTheme"
      />
      <label htmlFor="lightTheme">Light Theme</label>
      <br />

      <input
        type="radio"
        checked={isChecked(KILL_IT_WITH_FIRE)}
        onChange={onValueChange}
        value={KILL_IT_WITH_FIRE}
        id="killItWithFire"
        name="killItWithFire"
      />
      <label htmlFor="killItWithFire">Kill it with Fire</label>
    </section>
  );
}
