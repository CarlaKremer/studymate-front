import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1D1C26;
  box-sizing: border-box;
  padding: 0 0 0 2rem;
  width: 100%;
  height: 100vh;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Navigation = styled.div`
  position: sticky;
  top: 0;
  width: 30rem;
  height:5rem;
  background-color: #484B5C;
  border-radius: 0 0 1rem 1rem;
  
  color: #fff;
`;

export const ScreenSharing = styled.div`
  width: 30rem;
  height: 25rem;
  border-radius: 1rem;

  background-color: #484B5C;
`;

export const RoomMates = styled.div`
  width: 20rem;
  height: 5rem;
  border-radius: 1rem;

  background-color: #484B5C;
`;

export const Slider = styled.div`

`;

export const Pomodoro = styled.div``;
export const Todo = styled.div``;
export const Chat = styled.div``;

export const PanelContainer = styled.div`
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100%;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;

  &.show {
    transform: translateX(300px);
  }
`;

