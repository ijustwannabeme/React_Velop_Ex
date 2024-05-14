import React from "react";

// function Hello(props) {
//   return <div style={{ color: props.color }}>{props.name}님안녕하세용</div>;
// }

// export default Hello;

// function Hello({ name, color }) {
//     return <div style={{ color: color }}>{name}님안녕하세용</div>;
// }

// export default Hello;

const props = { name, color };

function Hello(props) {
  return (
    <div>
      color = {props.color}
      <br></br>
      name = {props.name}
    </div>
  );
}
export default Hello;

// Hello.defaultProps = {
//   name: "이름 없음",
// };
