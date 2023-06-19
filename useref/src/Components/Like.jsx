import React from "react";
import { useRef, useState } from "react";
let count = 0;
const Like = () => {
  const ref = useRef(0);
  const [refresh, setRefresh] = useState(false);

  const handleLike = () => {
    count = count + 1;
    ref.current = ref.current + 1;
    setRefresh(!refresh);
    return ref.current;
  };

  const handleRerender = () => {
    console.log("ref", ref);
    console.log("state", count);

    setRefresh(!refresh);
  };
  return (
    <div>
      <h1>Puppy Image Like</h1>
      <img
        src='https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg'
        alt=''
      />
      <h1>Like with (Ref) {ref.current}</h1>
      <h1>Like with (useState) {count} </h1>
      <button onClick={() => handleLike()}>Like </button>
      <button onClick={() => handleRerender()}>ReRender</button>
    </div>
  );
};

export default Like;
