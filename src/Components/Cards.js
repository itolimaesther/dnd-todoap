import React from "react";

function Cards({ items }) {
  return (
    <div className="items-center justify-center flex">
      {items.map((elem, index) => {
        return (
          <div
            className="grid grid-cols-1 w-full mr-5 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5"
            key={index}
          >
            <div className="bg-gray-200 rounded overflow-hidden">
              <div className="px-6 py-4">
                <h3> {elem.title} </h3>

                <div>
                  {elem.items.map((el, idx) => {
                    return (
                      <div
                        className="bg-white rounded-md border p-2 mb-5"
                        key={idx}
                      >
                        <ul>
                          <li>{el}</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;

// import React, { useState } from "react";
// // import Todo from "./Todo";
// import todoitems from "./Todoitems";
// // import Progress from "./Progress";
// // import Done from "./Done";

// function Cards() {
//   const [showInput, setShowInput] = useState(false);
//   const [inputText, setInputText] = useState("");
//   const [todoItems, setTodoItems] = useState([

//   ])

//   const [items, setItems] = useState([
//     {
//       title: "Todo",
//       items: []
//     },
//     {
//       title: "In Progress",
//       items: []
//     },
//     {
//       title: "Completed",
//       items: []
//     }
//   ])

//   const inputTextHandler = (e) => {
//     // console.log(e.target.value);
//     setInputText(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTodoItems ([
//       ...todoItems, { text: inputText }
//     ]);
//     setInputText('')
//   }

//   const addTask = (text) => {
//     const updatedTodoItems = [value, { text }];
//     setTodoItems(updatedTodoItems);
//   }

//   let input
//   // let newItem

//   if(showInput) {
//     input = <form onSubmit={ handleSubmit } className="flex flex-col bg-white w-auto h-50 p-10 mt-5 ">
//         <input  todoItems={todoItems} setTodoItems={setTodoItems} setInputText= {setInputText} value={inputText} onChange={inputTextHandler} type="text" placeholder="New task" className="border p-2 mb-4 "/>
//         <button
//           type="submit"
//           className="bg-blue-400 w-20 font-bold text-white font-bold py-2 px-4 rounded"

//           >Save</button>
//       </form>

//   }

//   return (
//     <div >
//       <div className="flex flex-col self-end justify-end items-end mb-40">
//         <button
//           className="bg-transparent text-white font-bold border border-white-400 py-2 px-4 rounded"
//           onClick={() => setShowInput(!showInput)}
//         >
//           Add Task
//         </button>
//         { input }
//       </div>

// <div className="items-center justify-center h-full flex ">
// {items.map((item, index) => {
//   return (
//     <div className="grid grid-cols-3 gap-4 bg-gray-50" key={index}>
//       <h3> {item.title} </h3>

//     </div>
//   )

//  })}
//         {/* <Todo
//           title = "Todo"
//           styleName="text-blue-700"
//           todoItems={todoItems}
//           // key={todoItem.id}
//         />
//         <Progress
//           title = "In Progress"
//           styleName = "text-orange-700"
//         />
//         <Done
//           title = "Done"
//           styleName = "text-green-700"
//         /> */}
//       </div>
//     </div>
//   );
// }

// export default Cards;
