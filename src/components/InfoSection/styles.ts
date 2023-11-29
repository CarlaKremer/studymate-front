import styled from 'styled-components';

export const InfoSectionContainer = styled.section`
  padding: 2.5rem 5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  div {
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  ul {
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  li {
    font-size: 1.35rem;
    margin: 0.5rem 0;
  }
`;

export const InfoSectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0;

  @media (max-width: 1049px) {
    flex-direction: column;
  }
`;


export const Image = styled.img`
    width: 55%;
    object-fit: cover;
    margin-top: 50px;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const BigLogo = styled.img`
    display: flex;
    width: 30%;
    object-fit: cover;
    margin: 50px 0;
    border-radius: 10px;
    justify-self: center;
    align-self: center;

    @media (max-width: 768px) {
        width: 90%;
    }
`;
