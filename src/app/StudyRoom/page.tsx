'use client';
import React, { useEffect, useState } from "react";
import { Container, Column, Navigation, ScreenSharing, RoomMates, PanelContainer, PomodoroWrap, TodoWrap, ColumnSlider, Slider } from "./styles";
import Chat from "@/components/Chat";
import Link from "next/link";
import Image from "next/image";
import Todo from "@/components/Todo";
import Pomodoro from "@/components/Pomodoro";

export default function StudyRoom() {
  const [isOpen, setIsOpen] = useState(true);

  const [userLogged, setUserLogged] = useState<any>(null);

  useEffect(() => {
      const sessionStorageUser = sessionStorage.getItem("username");
      if (sessionStorageUser != null) {
        setUserLogged(JSON.parse(sessionStorageUser));
      }
    }, []);
  return( 
    <Container>
    
     <Column>
        <Navigation>
            <Link href="/">
            <Image
              className="arrow-icon"
              src={"./assets/icons/left.svg"}
              width={32}
              height={32}
              alt="ícone de seta para esquerda"
            />
          </Link>
        </Navigation>
        <ScreenSharing/>
        <RoomMates/>
      </Column>

      <Slider>
        <ColumnSlider>
            <PomodoroWrap className="wrap">
             <Pomodoro/>
            </PomodoroWrap>
            <TodoWrap className="wrap">
              <Todo/>
            </TodoWrap>
        </ColumnSlider>
        <Column>
            <Chat username={userLogged} server='http://localhost:3090'/>
        </Column>
      </Slider>

     </Container>
  );
}
