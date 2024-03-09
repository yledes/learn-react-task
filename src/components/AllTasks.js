import React from "react";
import '../styles/AllTasks.css'

function Alltasks(props){
    
    return(
      <div className='container_tasks'>
       <p className="textTask" >
        Listas de tareas
       </p>
       <div className="spaceTask" />
        {         
        (props.tasks == false) ?         
          <p className="textTask" > En el momento no hay tareas agregadas </p> :
          <ul>
            {          
            props.tasks.map((v) => (
                <li className="containerInputButton">
                  <span className='input_tasks'>
                    {v.name}              
                  </span>
                  <button className="btn_edit" onClick={()=> props.editTasksAdd(v)}>
                    Editar
                  </button>
                  <button className="btn_delete" onClick={()=> props.deleteTasksAdd(v.id)}>
                    Eliminar
                  </button>
                </li>
            )) 
            }     
          </ul> 
        }
      </div>
    );
}

export default Alltasks;