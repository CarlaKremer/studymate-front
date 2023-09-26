import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.5rem;
`;

export const TextInput = styled.input`
  width: 100%;
  border: none;
  height: 35px;
  border-bottom: 1px solid #2b2b2b;
  background-color: transparent;
  outline: none;
`;