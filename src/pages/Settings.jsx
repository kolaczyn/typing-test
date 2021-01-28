import React, { useContext, useState } from 'react'
import { SET_DARK_THEME, SET_LIGHT_THEME, SET_KILL_IT_WITH_FIRE } from '../reducers/theme/actions';

import Box from '../components/box';
import ThemeContext from '../contexts/themeContext';


export default function Settings() {
  const { state, dispatch } = useContext(ThemeContext);
  const [checkedOption, setCheckedOption] = useState(SET_DARK_THEME)
  const isChecked = (label) => checkedOption === label;
  const onValueChange = (e) => {
    setCheckedOption(e.target.value);
    dispatch({
      type: e.target.value,
    })
  };

  return (
    <Box title="Settings">
      <h4>Choose your theme</h4>
      <section>
        {/* that's why I hate dealing with forms without a library in React */}
        <input type="radio"
          checked={isChecked(SET_DARK_THEME)}
          onChange={onValueChange}
          value={SET_DARK_THEME}
          id="darkTheme"
          name="darkTheme" />
        <label htmlFor="darkTheme">Dark Theme</label>
        <br />

        <input type="radio"
          checked={isChecked(SET_LIGHT_THEME)}
          onChange={onValueChange}
          value={SET_LIGHT_THEME}
          id="lightTheme"
          name="lightTheme" />
        <label htmlFor="lightTheme">Light Theme</label>
        <br />

        <input type="radio"
          checked={isChecked(SET_KILL_IT_WITH_FIRE)}
          onChange={onValueChange}
          value={SET_KILL_IT_WITH_FIRE}
          id="killItWithFire"
          name="killItWithFire" />
        <label htmlFor="killItWithFire">Kill it with Fire</label>
      </section>
    </Box>
  );
};
