import styled from "styled-components";

const Outlined = styled.button`
  border: 2px solid #21d663;
  background-color: transparent;
  color: #21d663;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 10rem;
  height: 2rem;
  border-radius: 32px;

  p {
    padding: 1rem 0.5rem;
    text-align: center;
    width: 100%;
  }

  &:hover {
    background-color: #21d663;
    color: #434343;
  }
`;

export default Outlined;
