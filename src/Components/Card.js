import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Card({el, todos, setTodos, data}) {

  // const deleteItem = () => {
  //   console.log(data)
  // }

  // console.log(data)
    




  return (
    <div className="bg-gray-50 h-auto mx-auto" key={el.id}>
        <ul className="flex justify-between">
            <li>{el.name}</li>
            <li className="flex justify-between align-middle">
                <DeleteIcon className="action-btn" />
                <EditIcon className="action-btn" />
            </li>
        </ul>
    </div>
  );
}

export default Card;
