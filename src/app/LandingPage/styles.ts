import styled from 'styled-components';

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

export const MainContainer = styled.div`
  margin-top: 100px;
`;