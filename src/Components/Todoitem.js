import React from "react";


function Todoitem( { items } ) {
    // console.log(items.item)
    return (
        <div className="bg-white rounded-md border text-center h-10 mb-5">
            {items.map((el, idx) => {
                return (
                    <ul>
                        <li key={idx}>{el.task}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Todoitem;
