import React, { useState } from "react";
// import { DragDropContext } from "react-beautiful-dnd";
import './index.css'
// import _ from "lodash";
import Todo from "./Components/Todo";
import Inprogress from "./Components/Inprogress";
import Complete from "./Components/Complete";

function App() {

  const [input, setInput] = useState("");
  const [newTodos, setNewTodos] = useState([])
  
  const todos = [
    {
      title: "Todo",
      items: newTodos,
    },
    {
      title: "In progress",
      items: [],
    },
    {
      title: "Completed",
      items: [],
    }
  ]
    
  
  
    // handling submit
    const addItem = (e) => {
      e.preventDefault();
      setNewTodos([...newTodos, input])
    
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
        <div className="items-center justify-center w-full" >
      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-5 sm:mb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
      >
        {
          todos.map((todo, idx) => {
            return (
              <h3 key={idx}>{todo.title}</h3>
            )
          })
        }

        <Todo todos={todos} newTodos={newTodos} setNewTodos={setNewTodos}/>
        <Inprogress todos={todos}/>
        <Complete todos={todos}/>

      </div>
    </div>
          
        </div>
      </div>
      <div className="bg-circle circle1 rounded-full w-80 h-80"></div>
      <div className="bg-circle circle2 rounded-full w-80 h-80"></div>
    </div>
  );
}
export default App;
