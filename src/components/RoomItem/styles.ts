import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
  height: 5rem;
  padding: 2rem;
  margin: 1rem;
  background-color: #040304;
  border-radius: 0.625rem;
  opacity: 0.65;
  @media (max-width: 1024px) {
    width:100%;
  }
  

  .options{
    a{
      margin-left: 1rem;
    }
    a:hover {
      filter: brightness(1.1);
      color: #5BB3AE;
      cursor: pointer;
    }
    .delete:hover {
    color: red
  }
  }

`;

export const ListContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  
  margin: 0;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
 
`;
