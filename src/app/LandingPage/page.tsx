import React from 'react';
import {
  Container,
  Header,
  HeaderItems,
  ButtonContainer,
  Button
} from './styles';
import Hero from '@/components/Hero';


const LandingPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Study Mate</h1>
      </Header>

      <Hero imageSrc='/assets/images/study-mate-landing-1.png'>
        O Study Mate é a sua plataforma definitiva para criar e participar de salas de estudo compartilhadas de forma simples e eficaz. Nosso objetivo é tornar o aprendizado mais acessível, colaborativo e produtivo.

        <ButtonContainer>
          <Button>login/register</Button>
        </ButtonContainer>
      </Hero>

    </Container>
  );
};

export default LandingPage;
