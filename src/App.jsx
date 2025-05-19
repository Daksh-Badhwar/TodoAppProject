import React from 'react';
import "./App.css";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

function App() {
 let name;
 let dueDate;

  const todoItems = [
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




  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
     <TodoItems todoItems={todoItems}></TodoItems>

    </center>

  )}

export default App;
