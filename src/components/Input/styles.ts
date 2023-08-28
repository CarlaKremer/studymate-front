import styled from "styled-components";

export const Container = styled.div<any>`
  width: ${(props) => (props.width ? props.width : "340px")};
  height: 56px;
  background: #efeff8;
  border-radius: 10px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  background: #efeff8;
  input {
    position: relative;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    background-position: left;
    background-size: 0px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: auto;
  }
`;

export const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  color: #1A1922;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.06em;
    color: rgb(0,0,0,0.7);
  }
`;

export const Icon = styled.div`
  flex: 0 0;
  margin-left: 20px;
  margin-right: 22px;
  width: 15px;
  height: 18px;
`;
