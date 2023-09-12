import React, { useEffect, useState } from 'react';

import { Container } from './styles';

export default function Pomodoro() {
  const [counter, setCounter] = useState(25);
  const [stop, setStop] = useState(true);
  let counterTimer: NodeJS.Timeout;

  useEffect(() => {
    if (stop == false) {
      counterTimer = setInterval(() => setCounter((pre) => pre - 1), 1000);
    }

    return () => clearInterval(counterTimer);
  });

  const submitHandler = () => setStop(false);

  const resetHandler = () => {
    setCounter(25);
    setStop(true);
  };
  
  const stopHandler = () => {
    setStop(true);
  };

return (
  <Container>
    <>
      <p>{counter}</p>

      <button onClick={submitHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  </Container>
);
}