import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Wrap } from './styles';

export default function Topbar() {
return (
  <Container>
    <p>StudyMate :D</p>
    <Wrap>
      <Link href="/Settings">
      <Image
        className="user"
        src="./assets/icons/settings.svg"
        width={32}
        height={32}
        alt="ícone de usuário"
      />
      </Link>
      <Image
        className="user"
        src="./assets/icons/user.svg"
        width={32}
        height={32}
        alt="ícone de usuário"
      />
    </Wrap>
  </Container>
);
}