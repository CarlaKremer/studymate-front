import React from 'react';

import { Container } from './styles';
import Link from 'next/link';


interface RoomItemProps {
  title: string;
  description: string;
  id: string;
  token?: any;
  onSubmit:()=>void;
  onDelete:()=>void;
}

const RoomItem: React.FC<RoomItemProps> = ({ title, description, id, token, onSubmit,onDelete }) => {
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
        <a className='delete' onClick={() => onDelete()}>Deletar</a>
      </div>
    </Container>
  );
};

export default RoomItem;