import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';

export default function ExpandButton({ isExpanded, ...props }) {
  return (
    <Wrapper {...props}>
      <span className="material-icons">
        {isExpanded ? 'expand_less' : 'expand_more'}
      </span>
    </Wrapper>

  );
}

ExpandButton.propTypes = {
  isExpanded: PropTypes.bool,
};

ExpandButton.defaultProps = {
  isExpanded: false,
};
