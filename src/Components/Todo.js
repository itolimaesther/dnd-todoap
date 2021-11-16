import React, { useState } from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
// import EditIcon from "@material-ui/icons/Edit";
import { InboxRounded } from "@material-ui/icons";

function Todo({ todos, newTodos, setNewTodos }) {
	let todo = todos[0];
	let items = todo.items || [];
	// console.log(items, "check");

	const [isChecked, setIsChecked] = useState(false);

	let handleCheck = (id, e) =>{
		setIsChecked(!isChecked)
		console.log("checked")
	}

	return (
		<div className="bg-blue-100 h-auto w-100 p-5">
			<ul className="block justify-between p-2">
				{items.map((item, idx) => {
					return (
						<li className="bg-white rounded-md border h-10 mb-5 py-2 px-2 flex flex-row justify-between" key={InboxRounded}>
							
							<label className="checkbox-label">

								<input
									className="checkbox"
									type="checkbox"
									// onChange={handleCheck}
									checked={isChecked[idx]}
									id={idx}
									name={item}
									value={item}
									onChange={handleCheck}
									
								/>

							{item}

							</label>
							{/* style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} */}

							{/* <div className="actions">
								<EditIcon fontSize="small" />
								<DeleteIcon fontSize="small" />
							</div> */}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Todo;
