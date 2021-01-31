import React from 'react';
import PropTypes from 'prop-types';

import Input from './styles';

import * as actions from '../../../reducers/typing/actions';

export default function InputField(props) {
  const {
    value, active, autoFocus, fieldName, dispatch,
  } = props;

  const handleChange = (e) => {
    // FIXME This is too speficic to be a generic input field
    // do something about it
    dispatch({
      type: actions.KEYSTROKE,
      fieldName,
      payload: e.target.value,
    });
  };

  return (
    <Input
      autoComplete="off"
      spellCheck="false"
      autoCorrect="off"
      autoCapitalize="off"
      autoFocus={autoFocus}
      value={value}
      onChange={active && handleChange}
    />
  );
}

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  autoFocus: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  fieldName: PropTypes.string.isRequired,
};

InputField.defaultProps = {
  autoFocus: false,
};
