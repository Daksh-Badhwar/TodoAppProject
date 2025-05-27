import React from "react";
import {useReducer} from "react";

export const TodoItemsContext = React.createContext({
    todoItems:[],
    addNewItem: ()=>{},
    deleteItem: ()=>{},
});


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

const TodoItemsContextProvider=({children})=>{

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
 return <TodoItemsContext.Provider value={{
      todoItems:todoItems,
      addNewItem: handleNewItem,
       deleteItem: handleDeleteItem,
    }}>{children}</TodoItemsContext.Provider>
}
export default TodoItemsContextProvider;