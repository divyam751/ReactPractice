import React from "react";
import { useState, useEffect } from "react";

const Post = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //Handle Page function
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrv = () => {
    setPage(page - 1);
  };

  //setLimit

  const limit = 5;

  //Fetch data from external API

  const getDataFromAPI = async (limit, page) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataFromAPI(limit, page);
    console.log("data:", data);
  }, [page]);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
        Post
      </h1>
      <button onClick={handlePrv} disabled={page === 1}>
        {" "}
        Pre
      </button>
      <button> {page} </button>
      <button onClick={handleNext}>Next</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {data.map((item) => {
          return (
            <div
              style={{
                border: "1px solid black",
              }}
              key={item.id}
            >
              <h1> {item.id} </h1>
              <h3> Title : {item.title} </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Post;
