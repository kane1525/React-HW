import { useRef } from 'react';
import clickSound from '../sounds/click-sound-effect-hd.mp3';

const audio = new Audio(clickSound);

export const Controls = ({
  setTimerTime,
  timerTime,
  history,
  setHistory,
  timeToShow,
}) => {
  const timerId = useRef(null);

  function handleStartClick() {
    if (!timerId.current) {
      audio.play();
      timerId.current = setInterval(() => {
        setTimerTime((prev) => prev + 50);
      }, 50);
    }
  }

  function handleStopClick() {
    if (timerId.current) {
      audio.play();
      clearInterval(timerId.current);
      timerId.current = null;
    }
  }

  function handleResetClick() {
    if (timerTime !== 0) {
      audio.play();
      if (timerId.current) {
        clearInterval(timerId.current);
        timerId.current = null;
      }
      setTimerTime(0);
      const newArray = [...history, timeToShow];
      setHistory(newArray);
      localStorage.setItem('timerHistory', JSON.stringify(newArray));
    }
  }

  return (
    <div className="controls">
      <button
        className={'button ' + (timerTime === 0 ? 'start' : 'continue')}
        onClick={handleStartClick}
      >
        {timerTime === 0 ? 'Start' : 'Continue'}
      </button>
      <button className="button stop" onClick={handleStopClick}>
        Stop
      </button>
      <button className="button reset" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};
