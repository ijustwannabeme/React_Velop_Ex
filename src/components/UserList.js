import React from "react";
import User from "./user";

function UserList(props) {
  return (
    <div>
      {props.users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
}

export default UserList;
