import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';

type Props = { isExpanded?: boolean; onClick: () => void };

const ExpandButton: React.FC<Props> = ({ onClick, isExpanded, ...props }) => (
  <Wrapper onClick={onClick} {...props}>
    <span className="material-icons">
      {isExpanded ? 'expand_less' : 'expand_more'}
    </span>
  </Wrapper>
);

export default ExpandButton;

ExpandButton.propTypes = {
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ExpandButton.defaultProps = {
  isExpanded: false,
};
