'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";

import { Container, TopBar, ConfigContainer } from './styles';
import api from "../../service/api";
import EditForm from '@/components/EditForm';
import RoomItem from '@/components/RoomItem';
import { ListContainer } from '@/components/RoomItem/styles';


export default function Settings() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<String | undefined>('');

  async function loadRooms() {
    setError(false);
    setLoading(true);
    try {
      const id = localStorage.getItem('id')?.replaceAll('"', "");
      setToken(localStorage.getItem('access_token')?.replaceAll('"', ""))
      const res = await api
        .get(`/rooms/author/${id}`, { headers: { 'Authorization': "Bearer " + token } });

        setRooms(res.data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadRooms();
  });

  return (
    <Container>
      <TopBar>
        <h1>Study Mate</h1>
        <Link href="/HomePage">
          <p>Salas</p>
        </Link>
      </TopBar>

      <ConfigContainer>
        <EditForm initialEmail='' initialUsername='' onSubmit={() => { }} />
        <ListContainer>
          {rooms.map((room, i) => (
            <RoomItem
              key={i}
              description={room.description}
              title={room.title}
              id={room.id}
              token={token}
            />
          ))}
        </ListContainer>
      </ConfigContainer>
    </Container>
  );
}