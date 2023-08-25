import React, { useState, useEffect } from 'react';

const LineWithBall = ({ lineLength, ballColor, ballRadius, ang, vel, lineColor }) => {
  const [ballPosition, setBallPosition] = useState(ballRadius); // Iniciamos la posición de la pelota al inicio
  const [ballDirection, setBallDirection] = useState(1); // Dirección inicial hacia el final de la línea

  const moveBall = () => {
    // Comprobamos si la pelota ha llegado al final de la línea o al inicio
    if (ballPosition >= lineLength - ballRadius) {
      // Si llegó al final, cambiamos la dirección para que vuelva hacia el inicio
      setBallDirection(-1);
    } else if (ballPosition <= ballRadius) {
      // Si llegó al inicio, cambiamos la dirección para que vaya hacia el final
      setBallDirection(1);
    }
    // Actualizamos la posición de la pelota
    setBallPosition(prevPosition => prevPosition + ballDirection);
  };

  useEffect(() => {
    const intervalId = setInterval(moveBall, vel);
    return () => clearInterval(intervalId);
  }, [ballPosition]); // Corregimos aquí para que el efecto se active al cambiar la posición de la pelota

  return (
    <div style={{ width: lineLength, height: ballRadius * 2, position: 'relative', transform: `rotate(${ang})` }}>
      <div
        style={{
          width: '100%',
          height: '2px',
          background: lineColor?`${lineColor}`:"black",
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
      <div
        style={{
          width: ballRadius * 2,
          height: ballRadius * 2,
          borderRadius: '50%',
          background: ballColor,
          position: 'absolute',
          top: '50%',
          left: ballPosition - ballRadius,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default LineWithBall;



// <LineWithBall lineLength={600} ballColor={"yellow"} ballRadius={10} ang={"30deg"} vel={"6"} lineColor={"green"}></LineWithBall>