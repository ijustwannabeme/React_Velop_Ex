import React from "react";

export default function CreateUser(props) {
  return (
    <div>
      <input
        name="name"
        placeholder="계정명"
        onChange={props.onChange}
        value={props.username}
      />
      <input
        name="email"
        placeholder="이메일 주소"
        onChange={props.onChange}
        value={props.email}
      />
      <button onClick={props.onCreate}>추가 버튼</button>
    </div>
  );
}
