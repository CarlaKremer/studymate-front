'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, GridContainer, ModalWrapper } from "./styles";
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
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("admin@topics.com");
  const [userPassword, setUserPassword] = useState<string>("test123");
  const [rooms, setRooms] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState<boolean>(false);

  const [isOpenModalNewRoom, setIsOpenModalNewRoom] = useState<boolean>(false);
  const [errorCreateRoom, setErrorCreateRoom] = useState<boolean>(false);
  const [loadingCreateRoom, setLoadingCreateRoom] = useState<boolean>(false);
  const [nameNewRoom, setNameNewRoom] = useState<string>("");
  const [descriptionNewRoom, setDescriptionNewRoom] = useState<string>("");

  async function authenticateUser() {
    setError(false);
    setLoading(true);
    try {
      const raw = JSON.stringify({
        email: userEmail,
        password: userPassword,
      });

      const resp = await api.post("/auth/login", raw);

      if (resp.status === 200) {
        localStorage.setItem("username", JSON.stringify(resp.data.username));
        sessionStorage.setItem("username", JSON.stringify(resp.data.username));

        localStorage.setItem("access_token", JSON.stringify(resp.data.access_token));
        sessionStorage.setItem("access_token", JSON.stringify(resp.data.access_token));

        setIsOpenModal(false);
        setIsOpenModalSignIn(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  async function createUser() {
    setError(false);
    setLoading(true);
    try {
      const raw = JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      });

      const token = localStorage.getItem('access_token')?.replaceAll('"', "")

      const resp = await api.post("/users", raw, { headers: { 'Authorization': "Bearer " + token } });

      localStorage.setItem("username", JSON.stringify(resp.data.username));
      sessionStorage.setItem("username", JSON.stringify(resp.data.username));

      localStorage.setItem("access_token", resp.data.access_token);
      sessionStorage.setItem("access_token", JSON.stringify(resp.data.access_token));

      setIsOpenModal(false);
      setIsOpenModalSignIn(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

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

  useEffect(() => {
    loadRooms();
  }, []);


  return (
    <GradientBackground>
      <Topbar />
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

      {/* Login */}
      <Modal isOpenModal={isOpenModal} setOpenModal={!isOpenModal}>
        {!loading ? (
          <ModalWrapper>
            <div className="header">
              <button
                onClick={() => setIsOpenModal(false)}
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
              <h1>Login</h1>
              <Input
                className="input"
                placeholder="E-mail"
                onChange={(e: any) => {
                  setUserEmail(e);
                }}
                value={userEmail}
              >
                <Image
                  alt="ícone de usuário"
                  src={"./assets/icons/user-login.svg"}
                  width={20}
                  height={20}
                />
              </Input>
              <Input
                type="password"
                className="input"
                placeholder="Password"
                onChange={(e: any) => {
                  setUserPassword(e);
                }}
                value={userPassword}
              >
                <Image
                  alt="ícone de chave"
                  src={"./assets/icons/password.svg"}
                  width={20}
                  height={20}
                />
              </Input>
              <p className="error" hidden={!error}>
                Ocorreu um erro, tente novamente
              </p>
            </div>
            <div className="footer">
              <button onClick={() => authenticateUser()}>Log in</button>
              <Link
                href={""}
                onClick={() => {
                  setIsOpenModal(false), setIsOpenModalSignIn(true);
                }}
              >
                <span>Create account</span>
              </Link>
            </div>
          </ModalWrapper>
        ) : (
          <Loading />
        )}
      </Modal>
      {/* Sign Up */}
      <Modal isOpenModal={isOpenModalSignIn} setOpenModal={!isOpenModalSignIn}>
        {!loading ? (
          <ModalWrapper>
            <div className="header">
              <button
                onClick={() => setIsOpenModal(false)}
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
              <h1>Sign Up</h1>
              <Input
                className="input"
                placeholder="Name"
                onChange={(e: any) => {
                  setUserName(e);
                }}
                value={userName}
              >
                <Image
                  alt="ícone de usuário"
                  src={"./assets/icons/user-login.svg"}
                  width={20}
                  height={20}
                />
              </Input>
              <Input
                className="input"
                placeholder="E-mail"
                onChange={(e: any) => {
                  setUserEmail(e);
                }}
                value={userEmail}
              >
                <Image
                  alt="ícone de usuário"
                  src={"./assets/icons/email.svg"}
                  width={20}
                  height={20}
                />
              </Input>

              <Input
                type="password"
                className="input"
                placeholder="Password"
                onChange={(e: any) => {
                  setUserPassword(e);
                }}
                value={userPassword}
              >
                <Image
                  alt="ícone de chave"
                  src={"./assets/icons/password.svg"}
                  width={20}
                  height={20}
                />
              </Input>
              <p className="error" hidden={!error}>
                Ocorreu um erro, tente novamente
              </p>
            </div>
            <div className="footer">
              <button onClick={() => createUser()}>Sign Up</button>
              <Link
                href={""}
                onClick={() => {
                  setIsOpenModal(true), setIsOpenModalSignIn(false);
                }}
              >
                <span>Log in</span>
              </Link>
            </div>
          </ModalWrapper>
        ) : (
          <Loading />
        )}
      </Modal>
      {/* Crete new room */}
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
