
import "./App.css";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import React,{useState} from 'react';
import WelcomeMessage from "./components/WelcomeMessage";
import {TodoItemsContext} from "./store/todo-items-store";

//why state in app compoennent as item not dependenet on add but add is.

//list is with app so for delete we need list

function App() {
 

 

const [todoItems,setTodoItems]=useState([]);
const handleNewItem = (itemName,itemDueDate)=>{

setTodoItems((prevState)=>[...prevState,{name:itemName,dueDate:itemDueDate}]);
}


const handleDeleteItem= (toDoItemName)=>{
 const newtodoItems= todoItems.filter((item)=>item.name!==toDoItemName);
 setTodoItems(newtodoItems);
}


  return (
    <TodoItemsContext.Provider value={{
      todoItems:todoItems,
      addNewItem: handleNewItem,
       deleteItem: handleDeleteItem,
    }}>
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo ></AddTodo>
       <WelcomeMessage ></WelcomeMessage>
     <TodoItems   ></TodoItems>

    </center>
    </TodoItemsContext.Provider>

  )}

export default App;
