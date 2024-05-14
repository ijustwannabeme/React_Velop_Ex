import React, { useState } from "react";

function InputSample2() {
  const [inputText, setInputText] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputText;

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(e.target); // <input placeholder = "이름">
    setInputText({ ...inputText, [name]: value });
  };
  const onReset = () => {
    setInputText({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
      ></input>
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      ></input>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} : ({nickname})
      </div>
    </div>
  );
}

export default InputSample2;

// export default function () {
//   return (
//     <div></div>
//   )
// }
