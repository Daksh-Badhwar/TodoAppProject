import React from "react";
export const TodoItemsContext = React.createContext({
    todoItems:[],
    addNewItem: ()=>{},
    deleteItem: ()=>{},
});