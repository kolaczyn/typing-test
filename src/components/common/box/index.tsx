import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header } from './styles';

type Props = {
  title?: string;
  children: React.ReactNode;
  isExpanded?: boolean;
};

const Box: React.FC<Props> = ({ title, children, ...props }) => (
  <Container {...props}>
    {title && (
      <Header>
        <h4>{title}</h4>
      </Header>
    )}
    {children}
  </Container>
);

export default Box;

Box.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool,
};

Box.defaultProps = {
  title: '',
  isExpanded: false,
};
