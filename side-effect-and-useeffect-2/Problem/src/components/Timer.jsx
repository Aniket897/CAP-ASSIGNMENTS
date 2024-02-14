import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    let timer;
    if (count > 0) {
      timer = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const resetTimer = () => {
    setCount(60);
  };

  return (
    <div className="timer">
      <h1>Counter : {count}</h1>
      <button onClick={resetTimer}>ResetTimer</button>
    </div>
  );
};

export default Timer;
