import {useState} from "react";
import { MdOutlineAddComment } from "react-icons/md";


const AddTodo=({onNewItem})=>{

  const [todoName,setTodoName]=useState("");
const [dueDate,setDueDate]=useState("");


const handleNameChange= (event)=>{
setTodoName(event.target.value);
}
const handleDateChange= (event)=>{
 setDueDate(event.target.value); 
}

const handleAddButtonClicked=(event)=>{
  event.preventDefault();
 onNewItem(todoName,dueDate);
 setTodoName("");
 setDueDate("");

}
 return (
 <div className="container">  
  
  <form className="row kg-row" onSubmit={handleAddButtonClicked}>
    <div className="col-6">
      <input  type="text" placeholder="Enter todo here" onChange={handleNameChange} value={todoName}/>
    </div>
    <div className="col-4">
       <input  type="date"  onChange={handleDateChange}  value={dueDate}/>
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