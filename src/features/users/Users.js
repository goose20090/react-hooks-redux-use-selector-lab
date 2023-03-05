import React from "react";
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector((state)=> state.users)
  return (
    <div>
      <ul>
        Total Users: {users.length}
        {users.map((user, index)=> <li key = {index}>{user.username}</li>)}
      </ul>
    </div>
  );
}

export default Users;
