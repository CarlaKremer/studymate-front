import styled from 'styled-components';

export const Container = styled.div`


`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  .end{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  .start{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
`;