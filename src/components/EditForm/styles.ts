import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:50%;
  margin: 0;

  p{
    font-size:2rem;
    font-weight: bold;
    margin: 1rem 0rem
  }
  @media (max-width: 1024px) {
    width:100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  width: 50%;

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    width:100%;
  
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #152941;
  background-color: #cfcfcf;
  border-radius: 4px;
  color: #000;
`;

export const Button = styled.button`
  background-color: #5BB3AE;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-self: center;
`;
