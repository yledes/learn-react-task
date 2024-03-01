import React from "react";
import '../styles/ModifyTasks.css'

function ModifyTasks({ task,setTask, addTaskScreen, textName, textButton }){
    return(
      <div className="container_add">
          <p className="text_add">
                {/* Agregar tareas - editar tareas */}
                { textName ? "Agregar tareas" : "Editar tareas" }
          </p>
          
          <form onSubmit={addTaskScreen}>
            <input 
              className="input_add" 
              type="text" 
              placeholder=" Ingrese la tarea"
              onChange={text => setTask(text.target.value)} 
              value={task}
            />
          
            <button 
              className="btn_add" 
              type="submit"
             
            >
              {/* Editar / Agregar */}
              {textButton ? "Agregar" : "Editar"}
            </button>
          </form>
      </div>
    );
}

export default ModifyTasks;