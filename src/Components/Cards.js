import React from "react";
import Card from "./Card";
// import { v4 as uuidV4} from "uuid";

function Cards({todos, setTodos, newTodos}) {
 
  return (
    <div className="items-center justify-center w-full" >
      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-5 sm:mb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
      >
        {
          todos.map((todo) => {
            return (
              <h3>{todo.title}</h3>
            )
          })
        }

        <Card todos={todos} setTodos={setTodos}/>

      </div>
    </div>
  );
}

export default Cards;
