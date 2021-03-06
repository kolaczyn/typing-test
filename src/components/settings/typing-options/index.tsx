import React, { useState, useContext } from 'react';

import TypingAction from '../../../reducers/typing/actions';
import ToastAction from '../../../reducers/toast/actions';
import TypingStateContext from '../../../contexts/TypingStateContext';
import TypingDispatchContext from '../../../contexts/TypingDispatchContext';
import Button from '../../common/button';
import InputField from '../../common/input-field';
import ToastDispatchContext from '../../../contexts/ToastDispatchContext';
import { ToastType } from '../../../reducers/toast/reducer';

const TypingOptions: React.FC = () => {
  const state = useContext(TypingStateContext);
  const dispatchTyping = useContext(TypingDispatchContext);
  const dispatchToast = useContext(ToastDispatchContext);
  const [message, setMessage] = useState('Confirm');
  const [value, setValue] = useState(() => state.timer.startingTime);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { minTime, maxTime } = state.timer;
    const selectedValue = Number(e.target.value);
    setValue(selectedValue);
    if (minTime >= selectedValue) {
      setMessage('The time cannot be negative');
    } else if (selectedValue >= maxTime) {
      setMessage('The time is too long');
    } else setMessage('Confirm');
  };

  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // restart the game for good measure
    dispatchTyping({ type: TypingAction.RESTART });
    dispatchTyping({ type: TypingAction.SET_TIME_LENGTH, payload: value });
    dispatchToast({
      type: ToastAction.PUSH_TOAST,
      payload: {
        content: 'The time has been set',
        type: ToastType.Info,
      },
    });
  };

  return (
    <form>
      <label htmlFor="time">Set time</label>
      <InputField
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id="time"
        min="5"
        type="number"
        active
        value={value}
        onChange={handleChange}
      />
      <Button
        primary
        isActive={!!message}
        onClick={e => submitForm(e)}
        secondary
      >
        {message}
      </Button>
    </form>
  );
};

export default TypingOptions;
