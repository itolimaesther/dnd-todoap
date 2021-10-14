import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Todo({ todos }) {
	let todo = todos[0];
	let items = todo.items || [];
	console.log(items, "check");

	return (
		<div className="bg-blue-100 h-auto w-100 p-5">
			<ul className="block justify-between p-2">
				{items.map((item) => {
					return (
						<li className="bg-white rounded-md border h-10 mb-5 py-2 px-2 flex flex-row justify-between">
							
              <p>{item}</p>

              <div className="actions">
                <EditIcon fontSize="small" />
                <DeleteIcon fontSize="small"/>
              </div>

              
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Todo;
