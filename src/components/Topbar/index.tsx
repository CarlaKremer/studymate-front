import React from 'react';

import { Container, Logo, Configuracoes,Login, Wrap } from './styles';

export default function Topbar() {
return (
  <Container>
    <Logo>Logo</Logo>
    <Wrap>
      <Configuracoes>Configurações</Configuracoes>
      <Login>Login</Login>
    </Wrap>
  </Container>
);
}