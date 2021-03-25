import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import './index.css'
import _ from "lodash";
import Cards from "./Components/Cards";
import { v4 } from "uuid";

function App() {
  
  const [todos, setTodos] = useState({
    todo: {
      title: "Todo",
      items: [],
    },
    "in-progress": {
      title: "In progress",
      items: [],
    },
    done: {
      title: "Completed",
      items: [],
    },
  });

  const [text, setText] = useState("");

  // gets the value of the text from the input
  const textHandler = (e) => {
    setText(e.target.value);
  };

  // handling submit
  const addItem = (e) => {
    e.preventDefault();

    // update the items in Todo
    setTodos((prev) => {
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [
            {
              id: v4(),
              name: text,
            },
            ...prev.todo.items,
          ],
        },
      };
    });
    setText("");
  };

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    // Creating a copy of item before removing from state(todos)
    const itemCopy = { ...todos[source.droppableId].items[source.index] };
    setTodos((prev) => {
      prev = { ...prev };

      // remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);

      // Adding to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
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
              value={text}
              onChange={textHandler}
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
          <DragDropContext onDragEnd={handleDragEnd}>
            {_.map(todos, (data, idx) => {
              return <Cards todos={todos} setTodos={setTodos} data={data} key={idx} idx={idx} />;
            })}
          </DragDropContext>
        </div>
      </div>
      <div className="bg-circle circle1 rounded-full w-80 h-80"></div>
      <div className="bg-circle circle2 rounded-full w-80 h-80"></div>
    </div>
  );
}
export default App;
