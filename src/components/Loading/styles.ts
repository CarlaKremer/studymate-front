import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  border: 4px solid #fff;
  border-top: 4px solid  #000;
  border-right: 4px solid  #000;
  border-bottom: 4px solid  #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
