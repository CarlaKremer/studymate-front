'use client';
import React, { useEffect, useState } from "react";
import { Container, Column, Navigation, ScreenSharing, RoomMates, PanelContainer, Pomodoro, Todo, ColumnSlider, Slider } from "./styles";
import Chat from "@/components/Chat";
import Link from "next/link";
import Image from "next/image";

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
          <Pomodoro className="wrap">
            00:00
          </Pomodoro>
          <Todo className="wrap">
            <li>item1</li>
          </Todo>
      </ColumnSlider>
      <Column>
          <Chat username={userLogged} server='http://localhost:3002'/>
      </Column>
</Slider>

     </Container>
  );
}
