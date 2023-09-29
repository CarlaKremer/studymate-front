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
import { useRouter } from "next/router";

export default function HomePage() {
  useRouter;
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("admin@topics.com");
  const [userPassword, setUserPassword] = useState<string>("test123");
  const [rooms, setRooms] = useState<any[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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

  useEffect(() => {
    loadRooms();
  }, []);

  async function createUser() {
    setError(false);
    setLoading(true);
    try {
      const raw = JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      });

      const resp = await api.post("/users", raw);

      localStorage.setItem("username", JSON.stringify(resp.data.username));
      sessionStorage.setItem("username", JSON.stringify(resp.data.username));
      setIsOpenModal(false);
      setIsOpenModalSignIn(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
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


  return (
    <Container>
      <Topbar />
      <GridContainer>
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
                data-testid="close-edit-nps"
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
                data-testid="close-edit-nps"
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
    </Container>
  );
}
