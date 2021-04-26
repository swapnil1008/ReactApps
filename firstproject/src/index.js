import React from "react";
import ReactDOM from "react-dom";

function buttonText() {
  return "Submit";
}
function getTime() {
  return new Date().toLocaleTimeString();
}
const App = () => {
  const buttonClick = "Click Me!";
  const buttonClickText = { text: "Press it!" };
  return (
    <div>
      <h1>Display Time</h1>
      <h2>{getTime()}</h2>
      <label htmlFor="name" className="label">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonClick} or {buttonText()} or {buttonClickText.text}
      </button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
