import styled from 'styled-components';

export const Wrap = styled.div`
  .card{
    width: 18rem;
    height: 14rem;
    background-color:#040304;
    border-radius: 0.625rem;
    opacity: 0.65;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
  }
  .card-content{
    position:relative;
    padding: 20px;
    background-color: #fff;
    color: #000;
    border-top-left-radius: 20px;
    cursor:pointer;
    transform: translateY(47%);
    transition: transform 0.3s;
    width: 100%;
  }
  .card-content::before{
    contain: '';
    position: absolute;
    top: -52px;
    right: -48px;
    width: 100px;
    height: 100px;
    display:block;
    border-radius:50%;
    box-shadow: inset -48px -48px #fff;
  }
  .card-description{
    color: #a18a96;

  }
  .card-content:hover{
    transform: translateY(0);
  }
`;

