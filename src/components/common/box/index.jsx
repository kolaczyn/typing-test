import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header } from './styles';

export default function Box({ title, children, ...props }) {
  return (
    <Container title={title?.length} {...props}>
      { title && <Header>{title}</Header>}
      {children}
    </Container>
  );
}

Box.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Box.defaultProps = {
  title: '',
};
