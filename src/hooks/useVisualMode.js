import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (data, replace = false) => {
    if (replace === true) {
      return setHistory((prev) => [...prev.slice(0, -1), data]);
    }

    setHistory((prev) => [...prev, data]);
  };

  const back = () => {
    if (history.length < 2) {
      return;
    }
    setHistory((prev) => [...prev.slice(0, -1)]);
  };

  return { mode: history[history.length - 1], transition, back };
}
