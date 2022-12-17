import "./App.css"
import { Todo } from "./Todo";
import React, { useState } from "react";


function App(){
  const [todos, setTodos] = useState([]);
  
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(30),
        task: userInput,
        complete: false
      };
      setTodos([todos, newItem]);
    }
    
  };

  const removeTask = (id) => {
    
  };

  const handleToggle = (id) => {
    
  };

  return(
    <div className="App">
    
    <h1>My Todo list for today: {todos.length} </h1>
    <Todo addTask={addTask} />
      {todos.map((todo) => {
        return(
    
<Todo
todo={todo}
key={todo.id}
toggleTask={handleToggle}
removeTask={removeTask} 
/>
);
})}
  </div>
  );
}

export default App;