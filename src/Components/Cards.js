import React from "react";

function Cards({ items, setItems}) {


  const onDragOver = (e)=> {
    e.preventDefault();
  }

  const onDragStart = (e, index) => {
      console.log("dragstart:", index)
      e.dataTransfer.setData("index", index)
  }

  
  const onDrop = (e)=> {
    let id = e.dataTransfer.getData("index")
    
   
  }




  return (
    <div className="items-center justify-center flex">
      {items.map((elem, index) => {
        return (
          <div
            className="grid grid-cols-1 w-full mr-5 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5"
            key={index}
          >
            <div 
                style={{"borderRadius":"5px"}}
                className={elem.title === "Todo" ? 
                "bg-blue-400" : "bg-green-400" && 
                elem.title === "In Progress" ? 
                "bg-orange-400": "bg-green-400"}
                onDragOver = {(e) => onDragOver(e)}
                onDrop = {(e) => onDrop(e, e.target, console.log(e.target) )}
                >
            
              <div className="px-6 py-4">

                <h3> {elem.title} </h3>
  
                <div>
                  {elem.items.map((el, idx) => {
                    return (
                      <div
                        className="bg-white rounded-md border p-2 mb-5"
                        key={idx} draggable onDragStart = {(e) => onDragStart(e, el)}
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


