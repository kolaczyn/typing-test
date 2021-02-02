import React from 'react';
import PropTypes from 'prop-types';

import Input from './styles';

export default function InputField(props) {
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
      autoFocus={autoFocus}
      value={active ? value : inactiveMessage}
      onChange={active ? onChange : () => {}}
    />
  );
}

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
