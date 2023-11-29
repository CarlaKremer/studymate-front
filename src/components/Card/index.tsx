import React, { useEffect, useState } from 'react';
import { Wrap } from './styles';

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {

  return (
    <Wrap>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </Wrap>
  );
}