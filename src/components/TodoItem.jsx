import React from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import {useContext} from "react";
const TodoItem=({todoName,todoDate})=>{

    
const{deleteItem}=useContext(TodoItemsContext);

return (
   <div class="container">
  <div class="row kg-row">
    <div class="col-6">
      {todoName}
    </div>
    <div class="col-4">
      {todoDate}
    </div>
      <div class="col-2">
        <button type="button" class="btn btn-danger kg-button" onClick={()=>deleteItem(todoName)}><MdDelete /></button>
      </div>

</div>
</div>

)


}
export default TodoItem;