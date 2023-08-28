'use client';
import React, { useState } from "react";
import  Slider  from "../../components/Slider";
import { Container, Column, Navigation, ScreenSharing, RoomMates, PanelContainer, Pomodoro, Todo, Chat } from "./styles";

export default function StudyRoom() {
  const [isOpen, setIsOpen] = useState(true);
  return( 
    <Container>
          <div
      style={{
        background: "#FFF",
        width: "100px",
        position: "fixed",
        zIndex: 1,
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        opacity: !isOpen ? "0" : "1",
        transition: "all .2s",
        visibility: !isOpen ? "hidden" : "visible",
      }}
    ></div>
    <Slider/>
    
         {/* <Column>
           <Navigation/>
           <ScreenSharing/>
           <RoomMates/>
         </Column>


             <Column>
                 <Pomodoro/>
                 <Todo/>
             </Column>
             <div className="panel-show">
               <Chat/> 
             </div> */}

     </Container>
  );
}
