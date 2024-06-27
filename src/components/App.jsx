import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputItem from "./InputItem";

function App() {
  var [input, setInput] = useState("");
  var [items, setItems] = useState([]);
  function handleChange(event) {
    var [name, value] = [event.target.name, event.target.value];
    setInput(value);
  }
  function addItems() {
    setItems((previtem) => {
      setInput("");
      return [...previtem, input];
    });
  }
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      
      <InputItem
      input={input}
      handleChange={handleChange}
      addItems={addItems}
       />
      <div>
        <ul>
          {items.map((item,index) => {
            return <ToDoItem 
            text={item}
            key={index}
            id={index}
            onChecked={deleteItem}
             />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
