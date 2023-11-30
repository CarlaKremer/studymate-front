import styled from 'styled-components';

export const GridLayout = styled.div`
  /* .container {  display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows:  1fr 1fr 1fr 1fr 1fr 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas:
        "video video video pomodoro chat"
        "video video video todo chat"
        "video video video todo chat";
  } */

  /* display: flex;
  flex-direction: row;
  /* justify-content: space-between;  */
  /* position: relative; 
  height: 100vh;*/
  /* overflow: hidden;  */
  .container {  
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "video video video pomodoro chat"
      "video video video todo chat"
      "video video video todo chat"; 
  }

  .video{
    grid-area: video;
  }
  
  .pomodoro { 
    grid-area: pomodoro; 
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 1rem 0 0 0 ;
    border-bottom: 1px solid #000;
  }

  .todo { 
    grid-area: todo; 
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 0 0 0 1rem;
  }

  .chat { 
    grid-area: chat; 
  }

`;
