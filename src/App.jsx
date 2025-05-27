
import "./App.css";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import React,{useState} from 'react';
import WelcomeMessage from "./components/WelcomeMessage";

//why state in app compoennent as item not dependenet on add but add is.

//list is with app so for delete we need list

function App() {
 let name;
 let dueDate;

 

const [todoItems,setTodoItems]=useState([]);
const handleNewItem = (itemName,itemDueDate)=>{

setTodoItems((prevState)=>[...prevState,{name:itemName,dueDate:itemDueDate}]);
}


const handleDeleteItem= (toDoItemName)=>{
 const newtodoItems= todoItems.filter((item)=>item.name!==toDoItemName);
 setTodoItems(newtodoItems);
}


  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
     <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} ></TodoItems>

    </center>

  )}

export default App;
