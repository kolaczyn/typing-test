/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';

import * as actions from '../../../reducers/typing/actions';
import TypingContext from '../../../contexts/typingContext';
import Button from '../../common/button';
import InputField from '../../common/input-field';

export default function TypingOptions() {
  const { state, dispatch } = useContext(TypingContext);
  console.log(state);
  const [value, setValue] = useState(() => state.timer.startingTime);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // restart the game for good measure
    dispatch({ type: actions.RESTART });
    dispatch({ type: actions.SET_TIME_LENGTH, payload: value });
  };

  return (
    <form>
      <label htmlFor="time">Set time</label>
      <InputField id="time" type="number" active value={value} onChange={handleChange} />
      <Button onClick={submitForm} secondary>Confirm</Button>
    </form>
  );
}
