import React from "react";

const SingleUserCard = ({ avatar, email, first_name, last_name }) => {
  return (
    <div>
      <img src={avatar} alt='avatar' style={{ borderRadius: "50%" }} />
      <p>
        <span> {first_name} </span>
        <span> {last_name} </span>
      </p>
      <p> {email} </p>
    </div>
  );
};

export default SingleUserCard;
