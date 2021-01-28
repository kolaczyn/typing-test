import React from 'react'

import { Container, Header } from './styles';

export default function Box({ title, children, ...props }) {
  return (
    <Container title={title?.length} {...props}>
      { title && <Header>{title}</Header>}
      {children}
    </Container>
  );
}
