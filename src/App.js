import React, { useState } from "react";
import Cards from "./Components/Cards";

function App() {

  const [todos, setTodos] = useState({
    title: "Todo",
    items: ["First Todo"],
  });
  const [inProgress, setInprogress] = useState({
    title: "In Progress",
    items: ["In progress"],
  });
  const [completed, setCompleted] = useState({
    title: "Completed",
    items: ["completed"],
  });


  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");

  // gets the value of the text from the input
  const textHandler = (e) => {
    setText(e.target.value);
  };

  // handling submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // update the items in Todo

    setTodos((prevTodos) => ({ items: [...prevTodos.items, text] }));
    
    setShowInput(false);
    setText("");
  };

  // Show the input form

  const input = (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white w-auto h-50 p-10 mt-5 "
    >
      <input
        value={text}
        onChange={textHandler}
        type="text"
        placeholder="New task"
        className="border p-2 mb-4 "
      />
      <button
        type="submit"
        className="bg-blue-400 w-20 font-bold text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </form>
  );



  

  return (
    <div className="container-wrap w-full h-screen bg-purple-800">
      <div className="p-10">
        <div className="flex flex-col self-end justify-end items-end">
          <button
            className="bg-transparent text-white font-bold border border-white-400 py-2 px-4 rounded"
            onClick={() => setShowInput(!showInput)}
          >
            Add Task
          </button>
          {showInput && input}
        </div>
      </div>

      <div className="bg-white w-4/5 h-4/5 rounded mx-auto p-5">
        <Cards items={[todos, inProgress, completed]} />
      </div>
    </div>
  );
}
export default App;
