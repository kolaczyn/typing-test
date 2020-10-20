import React, { useEffect, useState } from "react";
import { sampleText } from "./text";
import "./style.css";

function App() {
  function handleInput(event) {
    const str = event.target.value;
    if (str.slice(str.length - 1) === " ") setInput("");
    else setInput(event.target.value);
  }

  const [bigText, setBigText] = useState(sampleText);
  const [inputText, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(60);
  useEffect(() => {
    setTimeout(() => {
      setTime((oldTime) => oldTime - 1);
    }, 1000);
  });
  // setTimeout(setTime(time - 1), 1000);
  return (
    <div className="content">
      <div className="big-text element">{bigText.map((t) => `${t} `)}</div>
      <div className="input-div">
        <button className="element">{time}</button>
        <input
          type="text"
          className="input-element element"
          value={inputText}
          onChange={handleInput}
        />
        <button className="element">
          <img src="refresh.svg" class="refresh-icon" alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
