import { useState, useEffect } from "react";
import React from "react";
import "./style.css";
//Manage States

const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  //Fetch Data from API (JSON Server)

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/todo`);
      const data = await response.json();
      setTodo(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(todo);
  useEffect(() => {
    fetchData();
  }, []);

  // Add Todo
  const handleAdd = () => {
    const newTodo = {
      title: input,
      status: false,
    };

    fetch("http://localhost:8080/todo", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      fetchData();
    });
  };

  //Delete Todo

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/todo/${id}`, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then(() => {
      fetchData();
    });
  };

  //Toggle

  const handleToggle = (id, Status) => {
    const updatedTodo = {
      status: !Status,
    };

    fetch(`http://localhost:8080/todo/${id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    }).then(() => {
      fetchData();
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Todos</h1>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type='text'
        placeholder='Enter your Todo Task'
        style={{ margin: "20px" }}
      />
      <button onClick={handleAdd}>Submit</button>
      <div>
        {todo.map((singleTodo) => {
          return (
            <div
              key={singleTodo.id}
              style={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                gap: "50px",
                width: "80%",
                margin: "auto",
              }}
            >
              <p>{singleTodo.title}</p>
              <p style={{ color: singleTodo.status ? "green" : "red" }}>
                {singleTodo.status ? "Completed" : "Pending"}
              </p>
              <button
                onClick={() => {
                  handleToggle(singleTodo.id, singleTodo.status);
                }}
                style={{ height: "40px", margin: "auto" }}
              >
                Toggle
              </button>
              <button
                onClick={() => {
                  handleDelete(singleTodo.id);
                }}
                style={{ height: "40px", margin: "auto" }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
