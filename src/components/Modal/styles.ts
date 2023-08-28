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
width: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1D1C26;
  border-radius: 0.5rem;
  padding:2rem;
`;