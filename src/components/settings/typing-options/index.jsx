import React, { useState, useContext } from 'react';

import * as typingActions from '../../../reducers/typing/actions';
import * as toastActions from '../../../reducers/toast/actions';
import TypingStateContext from '../../../contexts/TypingStateContext';
import TypingDispatchContext from '../../../contexts/TypingDispatchContext';
import Button from '../../common/button';
import InputField from '../../common/input-field';
import ToastDispatchContext from '../../../contexts/ToastDispatchContext';

export default function TypingOptions() {
  const state = useContext(TypingStateContext);
  const dispatchTyping = useContext(TypingDispatchContext);
  const dispatchToast = useContext(ToastDispatchContext);
  const [message, setMessage] = useState('Confirm');
  const [value, setValue] = useState(() => state.timer.startingTime);
  const handleChange = (e) => {
    const { minTime, maxTime } = state.timer;
    setValue(e.target.value);
    if (minTime >= e.target.value) {
      setMessage('The time cannot be negative');
    } else if (e.target.value >= maxTime) {
      setMessage('The time is too long');
    } else setMessage('Confirm');
  };

  const submitForm = (e) => {
    e.preventDefault();
    // restart the game for good measure
    dispatchTyping({ type: typingActions.RESTART });
    dispatchTyping({ type: typingActions.SET_TIME_LENGTH, payload: value });
    dispatchToast({
      type: toastActions.PUSH_TOAST,
      payload: {
        content: 'The time has been set',
        type: 'info',
      },
    });
  };

  return (
    <form>
      <label htmlFor="time">Set time</label>
      <InputField id="time" min="5" type="number" active value={value} onChange={handleChange} />
      <Button primary isActive={!!message} onClick={submitForm} secondary>{message}</Button>
    </form>
  );
}
