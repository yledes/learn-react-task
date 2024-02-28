import React from "react";
import '../styles/ModifyTasks.css'

function ModifyTasks(){
    return(
      <div className="container_add">
          <p className="text_add">
                Agregar tareas - editar tareas
          </p>
          <input className="input_add"  />
          <button className="btn_add">
            Editar / Agregar
          </button>

      </div>
    );
}

export default ModifyTasks;