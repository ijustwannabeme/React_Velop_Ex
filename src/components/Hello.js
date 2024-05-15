import React from "react";

function Hello({ name, color, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요! {name} 입니다! , 색은 {color}입니다!{" "}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름",
  color: "black",
};

export default Hello;
