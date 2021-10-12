import React, { useState } from "react";
// import { DragDropContext } from "react-beautiful-dnd";
import './index.css'
// import _ from "lodash";
import Cards from "./Components/Cards";
// import { v4 as uuidV4} from "uuid";

function App() {

  const [input, setInput] = useState("");
  
  const [todos, setTodos] = useState([
    {
      title: "Todo",
      items: [],
    },
    {
      title: "In progress",
      items: [],
    },
    {
      title: "Completed",
      items: [],
    },
  ]);
  
    // handling submit
    const addItem = (e) => {
      e.preventDefault();
  
      let newItems = todos.items
      
      if(todos.title === 'Todo'){
        setTodos(todos => {
          return[...todos, newItems]
        });
      }
  
      setInput("")
  
    };

  // gets the value of the text from the input
  const InputHandler = (e) => {
    setInput(e.target.value);
  };

  

  return (
    <div className="container-wrap w-full h-screen relative bg-gradient-to-r from-purple-800 to-purple-700">
      <div className="flex flex-col h-screen p-10">
        <div className="flex flex-col sm:self-center md:self-end sm:justify-center md:justify-end sm:items-end md:items-center">
          <form
            onSubmit={addItem}
            className="flex flex-row bg-white justify-between p-1 rounded mb-5 w-auto"
          >
            <input
              value={input}
              onChange={InputHandler}
              type="text"
              placeholder="Add new task"
              className="focus:outline-none w-full"
            />
            <button
              type="submit"
              className="bg-purple-400 font-bold focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
          </form>
        </div>

        <div className="wraper sm:w-full md:w-full sm:block md:flex rounded p-5">

        <Cards todos={todos} setTodos={setTodos}/>
          
        </div>
      </div>
      <div className="bg-circle circle1 rounded-full w-80 h-80"></div>
      <div className="bg-circle circle2 rounded-full w-80 h-80"></div>
    </div>
  );
}
export default App;
