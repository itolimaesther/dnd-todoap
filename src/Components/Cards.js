import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "./Card";

function Cards({ data, idx, todos, setTodos }) {
  return (
    <div className="items-center justify-center w-full" key={idx}>
      <div
        className="grid grid-cols-1 w-full mr-0 sm:grid-cols-1 mb-5 sm:mb-5 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
        key={idx}
      >
        <h3> {data.title} </h3>
        <Droppable droppableId={idx}>
          {(provided) => {
            return (
              <div
                className={`border, mr-5 ${
                  data.title === "Todo"
                    ? "bg-blue-400"
                    : "bg-blue-400" && data.title === "In progress"
                    ? "bg-yellow-400"
                    : "bg-green-400"
                }`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="px-6 py-4">
                  {data.items.map((el, index) => {
                      return (
                        <Draggable
                          key={el.id}
                          index={index}
                          draggableId={el.id}
                        >
                          {(provided) => {
                            return (
                              <div
                                className="bg-white rounded-md border p-2 mb-5"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Card data={data} todos={todos} setTodos={setTodos} el={el} />
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                </div>
              </div>
            );
          }}
        </Droppable>
      </div>
    </div>
  );
}

export default Cards;
