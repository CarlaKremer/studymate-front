'use client';
import React, { useEffect, useState } from "react";
import {
  Container, Column, Navigation, RoomMates,
  PomodoroWrap, TodoWrap, ColumnSlider, Slider
} from "./styles";
import Chat from "@/components/Chat";
import Link from "next/link";
import Image from "next/image";
import Todo from "@/components/Todo";
import Pomodoro from "@/components/Pomodoro";
import { useSearchParams } from 'next/navigation';
import ScreenSharing from "@/components/ScreenSharing";


export default function StudyRoom() {
  const searchParams = useSearchParams()

  const [isOpen, setIsOpen] = useState(true);
  const [userLogged, setUserLogged] = useState<any>(null);

  const getRoomId = () => {
    return searchParams.get('roomId')
  }

  useEffect(() => {

    const sessionStorageUser = sessionStorage.getItem("username");
    if (sessionStorageUser != null) {
      setUserLogged(JSON.parse(sessionStorageUser));
    }
  }, []);
  return (
    <Container>

      <Column>
        <Navigation>
          <Link href="/HomePage">
            <Image
              className="arrow-icon"
              src={"./assets/icons/left.svg"}
              width={32}
              height={32}
              alt="ícone de seta para esquerda"
            />
          </Link>
        </Navigation>
        <ScreenSharing
          roomId={getRoomId()}
          server='http://localhost:3090' />
        <RoomMates />
      </Column>

      <Slider>
        <ColumnSlider>
          <PomodoroWrap className="wrap">
            <Pomodoro />
          </PomodoroWrap>
          <TodoWrap className="wrap">
            <Todo />
          </TodoWrap>
        </ColumnSlider>
        <Chat
          username={userLogged}
          roomId={getRoomId()}
          server='http://localhost:3090' />
      </Slider>

    </Container>
  );
}
