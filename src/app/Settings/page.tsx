'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";

import { Container, TopBar, ConfigContainer } from './styles';
import api from "../../service/api";
import EditForm from '@/components/EditForm';


export default function Settings() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);


  async function loadRooms() {
    setError(false);
    setLoading(true);
    try {
      const id = localStorage.getItem('id')?.replaceAll('"', "");
      console.log(id)
      const token = localStorage.getItem('access_token')?.replaceAll('"', "")
      const res = await api.get(`/rooms/author/${id}`, { headers: { 'Authorization': "Bearer " + token } });
      setRooms(res.data);
      console.log(res.data)
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
    <Container>
      <TopBar>
        <h1>Study Mate</h1>
        <Link href="/HomePage">
          <p>Salas</p>
        </Link>
      </TopBar>

      <ConfigContainer>
        <EditForm initialEmail='' initialUsername='' onSubmit={() => { }} />
        <div>
          {rooms.map((room, i) => (
            <Link
              key={i}
              href={{
                pathname: '/StudyRoom',
                query: { roomId: room.id }
              }}
            >
              <p>{room.title}</p>
            </Link>
          ))}
        </div>
      </ConfigContainer>
    </Container>
  );
}