import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0,0,0,0.8);
  z-index: 1000;
`;

export const Container = styled.div`
  max-height: 755px;
  max-width: 460px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1D1C26;
  border-radius: 0.5rem;
  padding: 1.25rem;
  color: black;


  @media (max-width: 700px) {
    overflow-y: scroll;
    max-width: 25rem;
    max-height: 100vh;
  }
  @media (max-width: 500px) {
    overflow-y: scroll;
    max-width: 23.125rem;
    max-height: 100vh;
  }
  @media (max-width: 400px) {
    overflow-y: scroll;
    max-width:12rem;
    max-height:auto;
  }
  @media (max-width: 280px) {
    overflow-y: scroll;
    width: 12.5rem;
    max-height: 31.25rem;
  }
  
`;