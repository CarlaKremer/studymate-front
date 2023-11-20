'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Container, TopBar, SideBar, ModalWrapper } from './styles';
import api from "../../service/api";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Modal from '@/components/Modal';
import EditForm from '@/components/EditForm';
import RoomItem from '@/components/RoomItem';
import { ListContainer } from '@/components/RoomItem/styles';
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import ResponsiveSideBar from '@/components/ReponsiveSideBar';


export default function Settings() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<String | undefined>('');
  const [configIndex, setConfigIndex] = useState<String>('personal');
  const [newUsername, setNewUsername] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  
  const [isOpenModalEditRoom, setIsOpenModalEditRoom] = useState<boolean>(false);
  const [loadingEditRoom, setLoadingEditRoom] = useState<boolean>(false);
  const [errorEditRoom, setErrorEditRoom] = useState<boolean>(false);
  const [newDescriptionRoom, setNewDescriptionRoom] = useState<string>('');
  const [currentId, setCurrentId] = useState<string>('');

  function isPersonalActive(){
    return configIndex === 'personal';
  }

  async function loadRooms() {
    setError(false);
    setLoading(true);
    try {
      const id = localStorage.getItem('id')?.replaceAll('"', "");
      
      const res = await api.get(`/rooms/author/${id}`);

      if(res.status === 200){
        setRooms(res.data);
      }
    } catch (error) {
      setRooms([]);
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  async function editUser(name:string , email :string) {
    setError(false);
    setLoading(true);
    try {
      let data = JSON.stringify({
        name: name,
        email: email
      });
      const id = localStorage.getItem('id')?.replaceAll('"', "");

      const res = await api.put(`/users/${id}`,data);
      
      if(res.status == 200){
        setNewEmail('');
        setNewUsername('');
        notifyUpdated('Usuário alterado!');
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  async function editRoom(roomId:string, newDescription:string) {
    setErrorEditRoom(false);
    setLoading(true);
    try {
      let data = JSON.stringify({
        description: newDescription
      });

      const res = await api.put(`/rooms/${roomId}`, data);

      if(res.status == 200){
        setIsOpenModalEditRoom(false)
        notifyUpdated(`Descrição da sala alterada para ${newDescription}`)
        loadRooms();
      }
    } catch (error) {
      setErrorEditRoom(true);
      console.log(error);
    }
    setLoading(false);
  }

  async function deleteRoom (id:number) {
    try {
      const res = await api
        .delete(`/rooms/${id}`);

      if (res.status == 200) {
        loadRooms()
        notifyDelete('A sala foi deletada')
      }
    } catch (error) {
      console.error(error);
    }
  }

  function notifyUpdated(text: string) {
    toast.success(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  function notifyDelete(text: string) {
    toast.warn(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  function openModal(id:string){
    setIsOpenModalEditRoom(true);
    setCurrentId(id)
  }

  useEffect(() => {
    loadRooms();
  },[]);

  useEffect(() => {
    setToken(localStorage.getItem('access_token')?.replaceAll('"', ""));
  },[]);

  return (
    <>
    <SideBar>
    <button 
      className={isPersonalActive() ? 'active' : ''}
      onClick={()=>setConfigIndex('personal')}
      >Informaçoes pessoais</button>
    <button 
      className={!isPersonalActive() ? 'active' : ''}
      onClick={()=>setConfigIndex('editRooms')}
      >Editar sala</button>
    </SideBar>
    <ResponsiveSideBar isPersonalActive={isPersonalActive()} setConfigIndex={setConfigIndex}/>

    <Container>
      <TopBar>
        <Link href="/HomePage">
          <p>Salas</p>
        </Link>
      </TopBar>
      <div className="content">
        {loading ? <Loading/>: <>
          {isPersonalActive()?
            <>
            <EditForm
                newEmail={newEmail}
                setNewEmail={setNewEmail}
                newUsername={newUsername}
                setNewUsername={setNewUsername}
                onSubmit={() =>{editUser(newUsername, newEmail)}}
                />
            </>
            :<>
              <ListContainer>
                <h2>Editar salas:</h2>
                {rooms.map((room, i) => (
                  <RoomItem
                    key={i}
                    description={room.description}
                    title={room.title}
                    id={room.id}
                    token={token}
                    onSubmit={()=>openModal(room.id)}
                    onDelete={()=>deleteRoom(room.id)}
                  />
                ))}
              </ListContainer>
            </>
          }
        </>}
      </div>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <ToastContainer />

    </Container>
    <Modal isOpenModal={isOpenModalEditRoom} setOpenModal={!isOpenModalEditRoom}>
      {!loadingEditRoom ? (
        <ModalWrapper>
          <div className="header">
            <button
              onClick={() => setIsOpenModalEditRoom(false)}
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
            <h1>Nova descrição!</h1>
            <Input
              className="input"
              placeholder="Entre uma nova descrição"
              onChange={(e: any) => {
                setNewDescriptionRoom(e);
              }}
              value={newDescriptionRoom}
            />
            <p className="error" hidden={!errorEditRoom}>
              Ocorreu um erro, tente novamente
            </p>
          </div>
          <div className="footer">
            <button onClick={() => editRoom(currentId,newDescriptionRoom)}>Alterar</button>
          </div>
        </ModalWrapper>
      ) : (<Loading />)}
    </Modal>
    </>
  );
}