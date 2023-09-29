import React from 'react';

import { Container } from './styles';


interface RoomCardProps {
  title: string;
  description: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, description }) => {

  return (
    <Container>
      <div className="room-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default RoomCard;