'use client';
import { GridContainer, ModalWrapper } from "./styles";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import ResponsiveTopBar from "@/components/ReponsiveTopBar";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import api from "../../service/api";
import GradientBackground from "@/components/GradientBackground";
import Footer from "@/components/Footer";
import { useCredentials } from '../../contexts/Credentials';


export default function HomePage() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  const [isOpenModalNewRoom, setIsOpenModalNewRoom] = useState<boolean>(false);
  const [errorCreateRoom, setErrorCreateRoom] = useState<boolean>(false);
  const [loadingCreateRoom, setLoadingCreateRoom] = useState<boolean>(false);
  const [nameNewRoom, setNameNewRoom] = useState<string>("");
  const [descriptionNewRoom, setDescriptionNewRoom] = useState<string>("");
  const { credentials } = useCredentials();

  async function createRoom() {
    setErrorCreateRoom(false);
    setLoadingCreateRoom(true);
    try {
      const raw = JSON.stringify({
        title: nameNewRoom,
        description: descriptionNewRoom
      });

      const resp = await api.post("/rooms", raw, { headers: { 'Authorization': "Bearer " + credentials } });

      if (resp.status === 201) {
        loadRooms();
        setIsOpenModalNewRoom(false);
      }

    } catch (error) {
      setErrorCreateRoom(true);
      console.log(error);
    }

    setNameNewRoom("");
    setDescriptionNewRoom("");
    setLoadingCreateRoom(false);
  }

  async function loadRooms() {
    setError(false);
    setLoading(true);
    try {
      const res = await api.get("/rooms");

      if (res.status === 200) {
        setRooms(res.data);
      }
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
        <ResponsiveTopBar handleOpenModalNewRoom={handleOpenModalNewRoom} />
        {loading ? <Loading /> : (
          <GridContainer>
            {rooms.map((room, i) => (
              <Link
                key={i}
                href={{
                  pathname: '/StudyRoom',
                  query: { roomId: room.id, roomTitle: room.title }
                }}
              >
                <Card
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
                <h3>Nova sala !</h3>
                <Input
                  className="input"
                  placeholder="Nome"
                  onChange={(e: any) => {
                    setNameNewRoom(e);
                  }}
                  value={nameNewRoom}
                />

                <Input
                  className="input"
                  placeholder="Descrição..."
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
                <button onClick={() => createRoom()}>Criar!</button>
              </div>
            </ModalWrapper>
          ) : (<Loading />)}
        </Modal>

        <Footer />
      </GradientBackground>
  );
}
