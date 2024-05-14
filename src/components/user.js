import React from "react";

function User(props) {
  return (
    <div>
      <b>{props.user.username}</b>
      <span>{props.user.email}</span>
    </div>
  );
}

export default User;
