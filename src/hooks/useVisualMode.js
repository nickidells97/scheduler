import { useState } from "react";



export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (data, replace = false) => {

    const newHistory = [...history];

    if (replace === true) {
      newHistory.pop();
    }
    setMode(data);
    newHistory.push(data);
    setHistory(prev => ([...prev, newHistory]));
  };

  const back = () => {
    if (history.length < 2) {
      return;
    }
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
    setMode(newHistory[newHistory.length - 1]);
  };

  return { mode, transition, back };
}

