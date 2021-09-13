import React from "react";
// add any needed imports here
import { useSelector } from "react-redux"

function Users() {
  const users = useSelector((state) => state.users)
  const userCount = useSelector((state) => state.users.length)

  const renderUsers = users.map(user => <li key={user.username}>{user.username} - {user.hometown} </li>)

  return (
    <div>
      <ul>
        {renderUsers}
      </ul>
      Total Users: {userCount}
    </div>
  );
}

export default Users;
