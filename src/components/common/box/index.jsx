import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header } from './styles';

export default function Box({
  title, children, isExpanded, ...props
}) {
  return (
    <Container title={title?.length} {...props}>
      { title && (
      <Header>
        <h4>
          {title}
        </h4>
      </Header>
      )}
      {children}
    </Container>
  );
}

Box.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool,
};

Box.defaultProps = {
  title: '',
  isExpanded: false,
};
