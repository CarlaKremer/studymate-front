import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 5rem;
  padding: 2rem;
  margin: 1rem;
  background-color: #040304;
  border-radius: 0.625rem;
  opacity: 0.65;

  a:hover {
    filter: brightness(1.1);
    color: #5BB3AE;
    cursor: pointer;
  }
`;

export const ListContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-content: end;
  width: 50%;
  max-height: 25rem;
  margin: 0;
`;
