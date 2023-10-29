import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: radial-gradient(circle at top, #F3B5B9, #010042);
    padding-left: 30vh;
`;

export const TopBar = styled.div`
  position: sticky;
  top: 0;
  height:5rem;
  color: #fff;
  padding: 0.625rem 2.25rem;
  margin: 0 0 2rem 0 ;

  display: flex;
  flex-direction: row;
  justify-content: end;
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

export const ConfigContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    padding: 2rem;
    margin: 2rem;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SideBar = styled.div`
  position: fixed;
  width: 10vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 5%;

  display:flex;
  flex-direction: column;

  button {  
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    opacity: 0.6;
    transition: 0.3s;
  }

  button:hover {opacity: 1 }


@media (min-width:600px) {
   .content {
     margin-left: 250px;
   }
 }

 .active{
  background-color: #5BB3AE;
  opacity: 1;
 }

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