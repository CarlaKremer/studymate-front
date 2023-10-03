import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #010042;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  height:5rem;
  color: #fff;
  padding: 0.25rem 2rem;
  margin: 0 0 2rem 0 ;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderItems = styled.div`
  width: 10rem;
  max-width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 4rem 0rem;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-auto-rows: 16rem;
  gap: 0.8rem;
`;

export const ModalWrapper = styled.div`
  .header{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    button{
      background-color: #1D1C26;
      border: 0;
    }
  }
  .body{
    width: 100%;
    h1{
      color:#f9f9f9;
      margin-bottom: 1rem;
    }
    .error{
      font-size: 10px;
      color: #ff6961;
    }
  }
  .footer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    
    button{
      background-color: #363847;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;
      padding: 1rem;
      border-radius: 0.6rem;
      border: 0;
      :hover {
          filter: brightness(1.1);
          cursor: pointer;
        }
    }
    span{
      font-size: 14px;
      font-size: 14px;
      text-decoration: underline;
      :hover {
          filter: brightness(1.1);
        }
    }
  }
`;