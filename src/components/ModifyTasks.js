import React from "react";
import '../styles/ModifyTasks.css'

function ModifyTasks({ task,setTask, addTaskScreen, setEditTask,EditTaskNew, textEdit }){

    return(
      <div className="container_add">
          <p className="text_add">                
            { setEditTask ?  "Editar tareas" : "Agregar tareas" }
          </p>

          <p className="textAler_add">
            {textEdit}
          </p>
          
          <form onSubmit={ setEditTask ? EditTaskNew : addTaskScreen }>

            <input 
              className="input_add" 
              type="text" 
              placeholder=" Ingrese la tarea"
              onChange={text => setTask(text.target.value)} 
              value={task}
            />          
            <button 
              className={ setEditTask ? "btn_edid" : "btn_add" }              
              type="submit"             
            >
              { setEditTask ? "Guardar" :"Agregar"  }
            </button>
          </form>
      </div>
    );
}

export default ModifyTasks;