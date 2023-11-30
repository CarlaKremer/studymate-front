import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.5rem;
  .list{
    max-width: 90%;
  }
  `;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.5rem;
  width: 100%;
  p {
    font-size: 12px;
    hyphens: auto;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  border: none;
  height: 35px;
  border-bottom: 1px solid #2b2b2b;
  background-color: transparent;
  outline: none;
`;