import React from "react";
import { useState, useEffect } from "react";

const MyTimer = () => {
  const [count, setCount] = useState(4);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        console.log(prevCount);
        if (prevCount === 1) {
          console.clear();
          console.log("cleard");
          clearInterval(intervalId);
          return 0;
        }

        return prevCount - 1;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Time : {count} </h1>
    </div>
  );
};

export default MyTimer;
