
import "./App.css";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import React,{useState} from 'react';
import WelcomeMessage from "./components/WelcomeMessage";

//why state in app compoennent as item not dependenet on add but add is.

function App() {
 let name;
 let dueDate;

  const initialTodoItems = [
    {
      name: "To test Buy",
      dueDate: "4/10/23"
    },
    {
      name: "To test Go",
      dueDate: "4/10/23"
    },
     {
      name: "Like this video",
      dueDate: "right now"
    }
  ] 

const [todoItems,setTodoItems]=useState(initialTodoItems);
const handleNewItem = (itemName,itemDueDate)=>{
const newtodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}];
setTodoItems(newtodoItems);
}


  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
     <TodoItems todoItems={todoItems}></TodoItems>

    </center>

  )}

export default App;
