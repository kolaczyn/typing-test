import React, { useContext, useEffect, useState } from 'react';

import Box from '../components/box';
import ThemeContext from '../contexts/themeContext';
import { DARK_THEME, KILL_IT_WITH_FIRE, LIGHT_THEME } from '../reducers/theme/actions';

export default function Settings() {
  const { state, dispatch } = useContext(ThemeContext);
  const [checkedOption, setCheckedOption] = useState(null)
  const isChecked = (label) => checkedOption === label;
  const onValueChange = (e) => {
    setCheckedOption(e.target.value);
    dispatch({
      type: e.target.value,
    })
  };

  useEffect(() => { 
    setCheckedOption(state.themeName);
  }, [state.themeName])

  return (
    <Box title="Settings">
      <h4>Choose your theme</h4>
      <section>
        {/* that's why I hate dealing with forms without a library in React */}
        <input type="radio"
          checked={isChecked(DARK_THEME)}
          onChange={onValueChange}
          value={DARK_THEME}
          id="darkTheme"
          name="darkTheme" />
        <label htmlFor="darkTheme">Dark Theme</label>
        <br />

        <input type="radio"
          checked={isChecked(LIGHT_THEME)}
          onChange={onValueChange}
          value={LIGHT_THEME}
          id="lightTheme"
          name="lightTheme" />
        <label htmlFor="lightTheme">Light Theme</label>
        <br />

        <input type="radio"
          checked={isChecked(KILL_IT_WITH_FIRE)}
          onChange={onValueChange}
          value={KILL_IT_WITH_FIRE}
          id="killItWithFire"
          name="killItWithFire" />
        <label htmlFor="killItWithFire">Kill it with Fire</label>
      </section>
    </Box>
  );
};
