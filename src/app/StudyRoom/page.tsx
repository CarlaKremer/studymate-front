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
import VideoCall from "@/components/VideoCall";
import Loading from "@/components/Loading";
import api from "../../service/api";


export default function StudyRoom() {
  const searchParams = useSearchParams();
  const [liveKitToken, setLiveKitToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState(true);
  const [userLogged, setUserLogged] = useState<any>(null);

  const getRoomId = () => {
    return searchParams.get('roomId');
  }

  const requestLivekitToken = async () => {
    setLoading(true);
    try {
      const raw = JSON.stringify({
        userName: userLogged,
        roomName: getRoomId(),
      });

      const token = localStorage.getItem('access_token')?.replaceAll('"', "")

      const res = await api
        .post("/livekit-auth", raw, { headers: { 'Authorization': "Bearer " + token } });

      setLiveKitToken(String(res.data.token));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    requestLivekitToken();
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
        {loading ? <Loading /> : (
          <VideoCall token={liveKitToken} />
        )}
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
