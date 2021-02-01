import React from 'react';
import PropTypes from 'prop-types';

import Input from './styles';

export default function InputField(props) {
  const {
    value, active, autoFocus, onChange, noCorrection,
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
      value={value}
      onChange={active && onChange}
    />
  );
}

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  noCorrection: PropTypes.bool,
};

InputField.defaultProps = {
  autoFocus: false,
  noCorrection: false,
};
