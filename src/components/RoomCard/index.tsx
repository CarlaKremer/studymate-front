import React from 'react';

import { Container } from './styles';


interface RoomCardProps {
  title: string;
  description: string;
  newRoom?:boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, description, newRoom = false }) => {

  return (
    <Container>
      {newRoom ?
        <div className="new-room-card">
          <h2>+</h2>
          <p>Nova sala</p>
        </div>
         : 
         <>
          <h2>{title}</h2>
          <p>{description}</p>
         </>
      }
      
    </Container>
  );
};

export default RoomCard;