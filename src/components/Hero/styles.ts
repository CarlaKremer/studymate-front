import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 95%;
  height: 80vh;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 20px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 18px;
  line-height: 1.5;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
`;
