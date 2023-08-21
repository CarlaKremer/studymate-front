import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #1D1C26;
  
`;

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-auto-rows: 16rem;
  gap: 0.8rem;
`;
