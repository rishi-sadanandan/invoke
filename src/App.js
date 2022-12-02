import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Amplify, API } from "aws-amplify";

function App() {
  const [text, setText] = useState("");

  const myAPIName = "invokeAPI";
  const path = "/prompt";

  const handleTextAreaChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
    // send to backend amplify api function and turn to uppercase
  };

  // get the backend message amplify api function
  const handleButtonClickMessage = async () => {
    try {
      const data = await API.get(myAPIName, path);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // send the text to the backend amplify api function
  const handleButtonClickText = async () => {
    const myInit = {
      body: {
        text: text,
      },
    };

    try {
      const response = await API.post(myAPIName, path, myInit);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <textarea value={text} onChange={handleTextAreaChange} />
        <br />
        <button onClick={handleButtonClickMessage}>
          Get message from backend!
        </button>
        <br />
        <button onClick={handleButtonClickText}>Send text to backend!</button>
      </header>
    </div>
  );
}

export default App;
