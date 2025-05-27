
import "./App.css";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";

import WelcomeMessage from "./components/WelcomeMessage";

import TodoItemsContextProvider from "./store/todo-items-store";

//why state in app compoennent as item not dependenet on add but add is.

//list is with app so for delete we need list
function App() {
return (
   <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo ></AddTodo>
       <WelcomeMessage ></WelcomeMessage>
     <TodoItems   ></TodoItems>

    </center>
    </TodoItemsContextProvider>

  )}

export default App;
