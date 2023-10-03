import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  justify-content: space-around;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #5BB3AE;
  background-color: transparent;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #5BB3AE;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
