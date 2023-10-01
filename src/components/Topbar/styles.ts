import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  height:5rem;
  /* background-color: #454859; */
  color: #fff;
  padding: 0.625rem 1.25rem;
  margin: 0 0 2rem 0 ;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .icon{
    margin: 0 0.5rem 0 1rem;
    justify-content: center;
  }

  span {
    font-size: 1rem;
  }

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }


  button{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    border-radius: 24px;
    padding: 8px 16px;
    border: none;
    cursor: pointer;

    background-color: #1D1C26;
    color: #FAFAFA;
    font-size: 16px;
  }
`;
