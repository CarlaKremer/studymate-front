import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1D1C26;
  box-sizing: border-box;
  padding: 0 0 0 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ColumnSlider = styled.div`
  display: flex;
  flex-direction: column;

  .wrap{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
  top: 0;
  width: 30rem;
  height:5rem;
  background-color: #484B5C;
  border-radius: 0 0 1rem 1rem;
  
`;

export const ScreenSharing = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 1rem;

  background-color: #484B5C;
`;

export const RoomMates = styled.div`
  width: 20rem;
  height: 8rem;
  border-radius: 1rem;

  background-color: #484B5C;
`;

export const Slider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Pomodoro = styled.div`
  width: 18rem;
  height: 15rem;
  border-radius: 1rem 0 0 0 ;
  background-color: #363847;  
  border-bottom: 1px solid #484B5C;
`;

export const Todo = styled.div`
  width: 18rem;
  height: 35rem;
  border-radius: 0 0 0 1rem;
  background-color: #363847;
`;

export const PanelContainer = styled.div``;

