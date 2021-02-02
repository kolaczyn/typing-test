import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Input from './styles';

const InputField = forwardRef((props, ref) => {
  const {
    value, active, autoFocus, onChange, noCorrection, inactiveMessage,
  } = props;

  const correctionSettings = noCorrection && {
    autoComplete: 'off',
    spellCheck: 'false',
    autoCorrect: 'off',
    autoCapitalize: 'off',
  };

  return (
    <Input
      {...correctionSettings}
      ref={ref}
      autoFocus={autoFocus}
      value={active ? value : inactiveMessage}
      onChange={active ? onChange : () => {}}
    />
  );
});

export default InputField;

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  noCorrection: PropTypes.bool,
  inactiveMessage: PropTypes.string,

};

InputField.defaultProps = {
  autoFocus: false,
  noCorrection: false,
  inactiveMessage: '',
};
