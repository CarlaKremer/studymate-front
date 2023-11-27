import styled from 'styled-components';

export const Container = styled.div`
  background: radial-gradient(circle at bottom, #EC6E80, #010042);
  box-sizing: border-box;
  padding: 0 0 0 2rem;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 1rem;
  gap: 1rem;
`;

export const ColumnSlider = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .wrap{
    padding: 1rem;
    display: flex;
    flex-direction: column;
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
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 0 0 1rem 1rem;
  
`;

export const RoomMates = styled.div`
  width: 20rem;
  height: 8rem;
  border-radius: 1rem 1rem 0rem 0rem;

  /* background-color: rgba(0, 0, 0, 0.4); */
`;

export const Slider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const PomodoroWrap = styled.div`
  width: 18rem;
  border-radius: 1rem 0 0 0 ;
  background-color: #000;
  opacity: 0.75;
  border-bottom: 1px solid #000;
`;

export const TodoWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0 0 0 1rem;
  background-color: rgba(0, 0, 0, 0.65);
`;

export const PanelContainer = styled.div``;

