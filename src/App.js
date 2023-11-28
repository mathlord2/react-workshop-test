import React, { useState } from "react";
import ToDo from "./ToDo";
import './App.css';

function App() {
  // Stores all the to-do items
  const [toDo, setToDo] = useState(["Clean my room"]);

  // Stores the user input
  const [input, setInput] = useState("");

  // Method for updating the user input value
  const updateInput = (e) => {
    setInput(e.target.value);
  }

  // Method for adding a to-do list item
  const addToDo = () => {
    if (input != "") {
      const updatedToDo = [...toDo, input];
      setToDo(updatedToDo);
      setInput("");
    }
  }

  return (
    <div className="App">
      <div className="input">
        <input placeholder="What's on your mind?" value={input} onChange={updateInput}/>
        <button onClick={addToDo}>
          + Add
        </button>
      </div>

      <div className="toDos">
        {toDo.map(t => <ToDo text={t} key={Math.random()}/>)}
      </div>
    </div>
  );
}

export default App;