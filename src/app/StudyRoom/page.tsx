'use client';
import React, { useEffect, useState } from "react";
import {
   GridLayout
} from "./styles";
import Chat from "@/components/Chat";
import Todo from "@/components/Todo";
import Pomodoro from "@/components/Pomodoro";
import { useSearchParams } from 'next/navigation';
import VideoCall from "@/components/VideoCall";
import api from "../../service/api";
import GradientBackground from "@/components/GradientBackground";

export default function StudyRoom() {
  const searchParams = useSearchParams();
  const [liveKitToken, setLiveKitToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [userLogged, setUserLogged] = useState<any>(null);

  const roomTitle = searchParams.get('roomTitle');

  const getRoomId = () => {
    return searchParams.get('roomId');
  }

  const requestLivekitToken = async () => {
    setLoading(true);
    try {
      console.log(searchParams.get('roomTitle'))
      const raw = JSON.stringify({
        userName: sessionStorage.getItem("username"),
        roomName: searchParams.get('roomTitle'),
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
    const sessionStorageUser = sessionStorage.getItem("username");
    if (sessionStorageUser != null) {
      setUserLogged(JSON.parse(sessionStorageUser));
    }
    requestLivekitToken();
  }, []);

  return (
  <GradientBackground>
      <GridLayout>
        <div className="container">

            <div className="pomodoro"> 
                <Pomodoro />
            </div>

            <div className="todo">
              <Todo />
            </div>

            <div className="chat"> 
              <Chat
                username={userLogged}
                roomId={getRoomId()}
                server='http://localhost:3090' />
            </div>

            <div className="video">
              <VideoCall token={liveKitToken} />
            </div>

        </div>
      </GridLayout>
  </GradientBackground>
  );
}
