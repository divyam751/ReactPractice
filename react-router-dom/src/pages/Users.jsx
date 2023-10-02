import React, { useEffect, useState } from "react";
import SingleUserCard from "../components/SingleUserCard";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const jsonData = await response.json();
      console.log(jsonData.data);
      setUserData(jsonData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <SingleUserCard {...user} />
          </div>
        );
      })}
    </div>
  );
};

export default Users;
