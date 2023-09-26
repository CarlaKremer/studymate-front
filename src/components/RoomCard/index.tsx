import React from 'react';

import { Container } from './styles';


interface RoomCardProps {
  title: string;
  description: string;
  id: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, description, id }) => {
  const studyRoomLink: any = `/study-room/${id}`

  return (
    <a href={studyRoomLink}>
      <Container>
        <div className="room-card">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Container>
    </a>
  );
};

export default RoomCard;