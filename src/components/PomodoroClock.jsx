import React, { useState, useEffect } from 'react';
import '../styles/PomodoroClock.css'
const PomodoroClock = ({ workTime, breakTime, cycleLimit }) => {
  const [time, setTime] = useState(workTime * 60); // Time in seconds
  const [cycles, setCycles] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            setIsRunning(false);
            setCycles(prevCycles => prevCycles + 1);
            return prevTime;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(workTime * 60);
    setCycles(0);
  };

  return (
    <div className="pomodoro-clock-container">
      <h2>Pomodoro Clock</h2>
      <div className="timer">
        <h3>Time Remaining: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</h3>
        <p>Cycles: {cycles}</p>
      </div>
      <div className="buttons">
        {isRunning ? (
          <button className="pause-button" onClick={() => setIsRunning(false)}>Pause</button>
        ) : (
          <button className="start-button" onClick={startTimer}>Start</button>
        )}
        <button className="reset-button" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default PomodoroClock;
