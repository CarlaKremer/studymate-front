import React from 'react';

import { Container } from './styles';


export default function RoomCard({ title }: any) {
  return (
    <a >
      <Container>
        <p>{title}</p>
      </Container>
    </a>
  );
}