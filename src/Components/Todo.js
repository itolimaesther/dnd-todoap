import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Todo({ todos, newTodos, setNewTodos }) {
	let todo = todos[0];
	let items = todo.items || [];

	// console.log(items)

	// const deleteItem = ({id}) => {
		
	// 	setNewTodos(items.filter((newtodo) => console.log(newtodo.id) )) 

	// }
	

	return (
		<div className="bg-blue-100 h-auto w-100 p-5">
			<ul className="block justify-between p-2">
				{items.map((item, idx) => {
					return (
						<li className="bg-white rounded-md border h-10 mb-5 py-2 px-2 flex flex-row justify-between" key={idx}>
							
              			<p>{item}</p>

              
                <EditIcon fontSize="small"/>

                <DeleteIcon fontSize="small"
					onClick = {() => console.log("hello")}	/>

				

              
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Todo;
