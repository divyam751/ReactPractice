import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("date", Date.now());
      setCount((prevCount) => {
        if (prevCount === 1) {
          console.log(prevCount);
          clearInterval(intervalId);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    const cleanup = () => {
      clearInterval(intervalId);
      console.clear();
      console.log("cleanup called");
    };
    return cleanup;
  }, []);

  return (
    <div>
      <h1>Time : {count}</h1>
    </div>
  );
};

export default Timer;
