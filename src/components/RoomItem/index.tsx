import React from 'react';

import { Container } from './styles';
import Link from 'next/link';
import api from '@/service/api';
import router from 'next/router';


interface RoomItemProps {
  title: string;
  description: string;
  id: string;
  token?: any;
  onSubmit:()=>void;
}

const RoomItem: React.FC<RoomItemProps> = ({ title, description, id, token,onSubmit }) => {

  const deleteRoom = async () => {
    try {
      const res = await api
        .delete(`/rooms/${id}`, { headers: { 'Authorization': "Bearer " + token } });

      if (res.status == 200) router.push("/Settings");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Link
        href={{
          pathname: '/StudyRoom',
          query: { roomId: id }
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>

      <div className="options">
        <a onClick={()=>onSubmit()}>Editar</a>
        <a className='delete' onClick={() => deleteRoom()}>Deletar</a>
      </div>
    </Container>
  );
};

export default RoomItem;