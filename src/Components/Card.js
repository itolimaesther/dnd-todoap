import React from "react";
import Cards from './Cards'

function Card(setItems) {


  return (
    <div className="bg-gray-50 w-80 h-auto mx-auto">
    
      <Cards 
      setItems={setItems}
      />

    </div>
  );
}

export default Card;
