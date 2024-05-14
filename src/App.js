import React, { useRef } from "react";
import InputSample from "./components/InputSample";
import Counter from "./components/Counter";
import InputSample2 from "./components/InputSample2";
import UserList from "./components/UserList";

function App() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];
  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 사용
    nextId.current += 1;
  };
  return <UserList users={users} />;
}

export default App;
