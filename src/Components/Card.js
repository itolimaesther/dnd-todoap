import React from "react";
// import Todoitem from "./Todoitem";
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';

function Card({todos}) {

  return (
    <div className="bg-gray-100 h-auto w-100 p-5" >
      <div className="bg-white rounded-md border text-center h-10 mb-5 ">
          <ul className="flex justify-between p-2">
          {
            todos.map((todo) => {
              return (
                <li>{todo.items}</li>
              )
            })
          }

        </ul>
      
    </div>
    </div>
  );
}

export default Card;
