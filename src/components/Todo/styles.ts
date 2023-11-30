import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .list{
    max-width: 90%;
  }
  `;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 0.5rem;
  width: 100%;
  /* background-color: #5BB3AE; */
  padding: 1rem 0.5rem 1rem 0.5rem;
  p {
    font-size: 12px;
    hyphens: auto;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  .checkbox {
  cursor: pointer;

  &:checked:before {
    background-color: #5BB3AE;
    border-color: #5BB3AE;
  }
}
  .remove-button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  border: none;
  height: 35px;
  border-bottom: 1px solid #2b2b2b;
  background-color: transparent;
  outline: none;
  margin-left: 0.5rem;
`;