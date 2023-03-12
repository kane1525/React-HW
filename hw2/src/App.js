import { useState, useEffect } from 'react';
import { formatTime } from './helpers/timeHelper';
import './App.css';

import { Controls } from './components/Controls';
import { History } from './components/History';

function App() {
  const [timerTime, setTimerTime] = useState(0);
  const [history, setHistory] = useState([]);

  const timeToShow = formatTime(timerTime);

  useEffect(() => {
    const savedData = localStorage.getItem('timerHistory');
    if (savedData) {
      setHistory(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="App">
      <h1 className="time">{timeToShow}</h1>
      <Controls
        timerTime={timerTime}
        setTimerTime={setTimerTime}
        history={history}
        setHistory={setHistory}
        timeToShow={timeToShow}
      />
      <History history={history} />
    </div>
  );
}

export default App;
