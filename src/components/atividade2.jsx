import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [messageVisible, setMessageVisible] = useState(true);

  useEffect(() => {
    // Atualiza o relógio a cada segundo
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Define um tempo para a mensagem desaparecer após 5 segundos
    const timeoutId = setTimeout(() => {
      setMessageVisible(false);
    }, 5000);

    // Limpeza dos intervalos e timeouts ao desmontar o componente
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <h1>Relógio em Tempo Real</h1>
      <h2>{time}</h2>
      {messageVisible && <p>Esta mensagem desaparecerá em 5 segundos</p>}
    </div>
  );
};

export default RealTimeClock;
