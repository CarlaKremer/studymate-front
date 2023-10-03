'use client';
import { GridContainer, ModalWrapper } from "./styles";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import RoomCard from "@/components/RoomCard";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import api from "../../service/api";
import GradientBackground from "@/components/GradientBackground";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const router = useRouter();
  const [rooms, setRooms] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [isOpenModalNewRoom, setIsOpenModalNewRoom] = useState<boolean>(false);
  const [errorCreateRoom, setErrorCreateRoom] = useState<boolean>(false);
  const [loadingCreateRoom, setLoadingCreateRoom] = useState<boolean>(false);
  const [nameNewRoom, setNameNewRoom] = useState<string>("");
  const [descriptionNewRoom, setDescriptionNewRoom] = useState<string>("");

  async function createRoom() {
    setErrorCreateRoom(false);
    setLoadingCreateRoom(true);
    try {
      const raw = JSON.stringify({
        title: nameNewRoom,
        description: descriptionNewRoom
      });

      const token = localStorage.getItem('access_token')?.replaceAll('"', "")

      const resp = await api.post("/rooms", raw, { headers: { 'Authorization': "Bearer " + token } });

      loadRooms();
      setIsOpenModalNewRoom(false);

    } catch (error) {
      setErrorCreateRoom(true);
      console.log(error);
    }
    setLoadingCreateRoom(false);
  }

  async function loadRooms() {
    setError(false);
    setLoading(true);
    try {
      const res = await api.get("/rooms");
      setRooms(res.data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  const handleOpenModalNewRoom = () => {
    setIsOpenModalNewRoom(!isOpenModalNewRoom);
  };

  useEffect(() => {
    loadRooms();
  }, []);


  return (
    <GradientBackground>
      <Topbar handleOpenModalNewRoom={handleOpenModalNewRoom} />
      {loading ? <Loading /> : (
      <GridContainer>
        <a onClick={() => setIsOpenModalNewRoom(true)}>
          <RoomCard newRoom={true} title={''} description={''} />
        </a>
        {rooms.map((room, i) => (
          <Link
            key={i}
            href={{
              pathname: '/StudyRoom',
              query: { roomId: room.id }
            }}
          >
            <RoomCard
              title={room.title}
              description={room.description} />
          </Link>
        ))}
      </GridContainer>
      )}

      {/* Create new room */}
      <Modal isOpenModal={isOpenModalNewRoom} setOpenModal={!isOpenModalNewRoom}>
        {!loadingCreateRoom ? (
          <ModalWrapper>
            <div className="header">
              <button
                onClick={() => setIsOpenModalNewRoom(false)}
              >
                <Image
                  src="./assets/icons/X.svg"
                  alt="ícone de fechar"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <div className="body">
              <h1>Create a new room !</h1>
              <Input
                className="input"
                placeholder="Name"
                onChange={(e: any) => {
                  setNameNewRoom(e);
                }}
                value={nameNewRoom}
              />

              <Input
                className="input"
                placeholder="Description"
                onChange={(e: any) => {
                  setDescriptionNewRoom(e);
                }}
                value={descriptionNewRoom}
              />
              <p className="error" hidden={!errorCreateRoom}>
                Ocorreu um erro, tente novamente
              </p>
            </div>
            <div className="footer">
              <button onClick={() => createRoom()}>Create!</button>
            </div>
          </ModalWrapper>
        ) : (<Loading />)}
      </Modal>
    </GradientBackground>
  );
}
