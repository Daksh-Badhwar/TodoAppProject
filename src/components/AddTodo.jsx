import {useState,useRef} from "react";
import { MdOutlineAddComment } from "react-icons/md";
import {TodoItemsContext} from "../store/todo-items-store";
import {useContext} from "react";

const AddTodo=()=>{

const todoNameElement= useRef();
const dueDateElement=useRef();

const {addNewItem}=useContext(TodoItemsContext);


const handleAddButtonClicked=(event)=>{
  event.preventDefault();
  const todoName=todoNameElement.current.value;
  const dueDate=dueDateElement.current.value;
  todoNameElement.current.value="";
  dueDateElement.current.value="";
 addNewItem(todoName,dueDate);
 

}
 return (
 <div className="container">  
  
  <form className="row kg-row" onSubmit={handleAddButtonClicked}>
    <div className="col-6">
      <input  type="text" placeholder="Enter todo here" ref={todoNameElement}/>
    </div>
    <div className="col-4">
       <input  type="date"  ref={dueDateElement}/>
    </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success kg-button"
        ><MdOutlineAddComment /></button>
      </div>
  </form>
</div>




 )
}
export default AddTodo;