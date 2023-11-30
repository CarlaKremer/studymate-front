import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: transparent;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const Logo = styled.img`
  max-height: 50px;
`;

export const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
