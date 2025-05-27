
import "./App.css";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import React,{useReducer} from 'react';
import WelcomeMessage from "./components/WelcomeMessage";
import {TodoItemsContext} from "./store/todo-items-store";

//why state in app compoennent as item not dependenet on add but add is.

//list is with app so for delete we need list


const todoItemsReducer=(prevState,action)=>{
  let newTodoItems= prevState;

  if(action.type==="NEW_ITEM")
  {
     newTodoItems=
     [...prevState,{name:action.payload.itemName,dueDate:action.payload.itemDueDate}]
  }
  else if (action.type==="DELETE_ITEM")
  {
  {
  newTodoItems= prevState.filter((item)=>item.name!==action.payload.itemName);
 
}
  }

  return newTodoItems;
}


function App() {
 



//const [todoItems,setTodoItems]=useState([]);
 const[todoItems,dispatchTodoItems]=useReducer(todoItemsReducer,[]);


const handleNewItem = (itemName,itemDueDate)=>{

const newItemAction = {

  type:"NEW_ITEM",
  payload:{
      itemName: itemName,
       itemDueDate: itemDueDate,}

};
dispatchTodoItems(newItemAction);


//setTodoItems((prevState)=>[...prevState,{name:itemName,dueDate:itemDueDate}]);
}


const handleDeleteItem= (toDoItemName)=>{

const deleteItemAction = {

  type:"DELETE_ITEM",
  payload:{
      itemName: toDoItemName,
       }

};
dispatchTodoItems(deleteItemAction);}

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
