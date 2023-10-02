import React from "react";
import { Link as RouterLink } from "react-router-dom";

const AllLinks = () => {
  return (
    <div>
      <RouterLink to='/'> Home </RouterLink>
      <RouterLink to='/users'> Users</RouterLink>
      <RouterLink to='/about'> About </RouterLink>
      <RouterLink to='/contact'>Contact</RouterLink>
      <RouterLink to='/products'>Products </RouterLink>
    </div>
  );
};

export default AllLinks;
