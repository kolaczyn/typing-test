import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Input from './styles';

type Props = {
  value: string | number;
  active?: boolean;
  autoFocus?: boolean;
  onChange: () => void;
  noCorrection?: boolean;
  inactiveMessage?: string;
  type?: string;
};

const InputField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    value,
    active,
    autoFocus,
    onChange,
    noCorrection,
    inactiveMessage,
    type,
    ...rest
  } = props;

  const correctionSettings = noCorrection && {
    autoComplete: 'off',
    spellCheck: 'false',
    autoCorrect: 'off',
    autoCapitalize: 'off',
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Input
      {...correctionSettings}
      ref={ref}
      type={type}
      autoFocus={autoFocus}
      value={active ? value : inactiveMessage}
      onChange={active ? onChange : () => null}
      {...rest}
    />
  );
});

export default InputField;

InputField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  active: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  noCorrection: PropTypes.bool,
  inactiveMessage: PropTypes.string,
  type: PropTypes.string,
};

InputField.defaultProps = {
  active: true,
  autoFocus: false,
  noCorrection: false,
  inactiveMessage: '',
  type: 'text',
};
