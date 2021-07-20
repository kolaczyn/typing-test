import React, { useContext, useState } from 'react';

import ThemeContext from '../../../contexts/ThemeContext';
import Action from '../../../reducers/theme/actions';

const ChooseTheme: React.FC = () => {
  const { state, dispatch } = useContext(ThemeContext);
  // I dont know why I have to call the state, but whatever
  const [checkedOption, setCheckedOption] = useState(() => state.themeName);

  const isChecked = (label: string) => checkedOption === label;
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = e.target.value as Action;
    setCheckedOption(selectedOption);
    dispatch({
      type: selectedOption,
    });
  };

  return (
    <form>
      {/* that's why I hate dealing with forms without a library in React */}
      <input
        type="radio"
        checked={isChecked(Action.DARK_THEME)}
        onChange={onValueChange}
        value={Action.DARK_THEME}
        id="darkTheme"
        name="darkTheme"
      />
      <label htmlFor="darkTheme">Dark Theme</label>
      <br />

      <input
        type="radio"
        checked={isChecked(Action.LIGHT_THEME)}
        onChange={onValueChange}
        value={Action.LIGHT_THEME}
        id="lightTheme"
        name="lightTheme"
      />
      <label htmlFor="lightTheme">Light Theme</label>
      <br />

      <input
        type="radio"
        checked={isChecked(Action.KILL_IT_WITH_FIRE)}
        onChange={onValueChange}
        value={Action.KILL_IT_WITH_FIRE}
        id="killItWithFire"
        name="killItWithFire"
      />
      <label htmlFor="killItWithFire">Kill it with Fire</label>
    </form>
  );
};
export default ChooseTheme;
