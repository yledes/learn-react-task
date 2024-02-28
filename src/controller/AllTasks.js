import React from "react";
import '../styles/AllTasks.css'

function Alltasks(){
    return(
      <div className='container_tasks'>
       <p className="textTask" >
        Listas de tareas
       </p>
       <div className="spaceTask" />
       <input className='input_tasks' type='text' />
       <button className="btn_edit">
        Editar
       </button>
       <button className="btn_delete">
        Eliminar
       </button>

      </div>

    );
}

export default Alltasks;