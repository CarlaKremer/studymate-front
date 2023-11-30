import styled from "styled-components";

const Outlined = styled.button`
  border: 2px solid #BBCECC;
  background-color: transparent;
  color: #BBCECC;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 12rem;
  height: 2rem;
  border-radius: 32px;

  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    padding: 1rem 0.5rem;
    text-align: center;
    width: 100%;
  }

  &:hover {
    background-color: #BBCECC;
    color: #434343;
  }
`;

export default Outlined;
