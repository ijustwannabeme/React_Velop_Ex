import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    console.log(e.target);
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  return (
    <div>
      <input placeholder="이름 "> </input>
      <input placeholder="닉네임"></input>
      <input onChange={onChange} value={text}></input>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: 이름 (닉네임) </b>
      </div>
    </div>
  );
}

export default InputSample;
