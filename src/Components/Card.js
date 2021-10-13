import React from "react";
// import Todoitem from "./Todoitem";
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';

function Card({todos}) {

  let todo = todos[0]
  let items = todo.items || []
  console.log(items, 'check')

  return (
    <div className="bg-gray-100 h-auto w-100 p-5" >
      <div className="bg-white rounded-md border text-center h-10 mb-5 ">
          <ul className="block justify-between p-2">
            {
              items.map(item => {
                return(
                  <li>{item}</li>
                )
              
              })
            }
          

        </ul>
      
    </div>
    </div>
  );
}

export default Card;



