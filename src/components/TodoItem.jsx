import React from "react";
import { MdDelete } from "react-icons/md";
const TodoItem=({todoName,todoDate,onDeleteClick})=>{

    


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
        <button type="button" class="btn btn-danger kg-button" onClick={()=>onDeleteClick(todoName)}><MdDelete />cl</button>
      </div>

</div>
</div>

)


}
export default TodoItem;