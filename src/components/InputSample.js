import React, { useState, useRef } from "react";

function InputSample() {
  const [inputText, setInputText] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { name, nickname } = inputText;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputText({ ...inputText, [name]: value });
  };

  const onReset = (e) => {
    setInputText({
      name: "",
      nickname: " ",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input name="name" value={name} onChange={onChange} ref={nameInput} />
      <input name="nickname" value={nickname} onChange={onChange} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          값:
          {name} ({nickname})
        </b>
      </div>
    </div>
  );
}

export default InputSample;
