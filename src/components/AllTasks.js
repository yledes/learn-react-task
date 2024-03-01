import React from "react";
import '../styles/AllTasks.css'

function Alltasks( props){

    return(
      <div className='container_tasks'>
       <p className="textTask" >
        Listas de tareas
       </p>
       <div className="spaceTask" />
       <ul>
          {          
          props.tasks.map((v) => (

              <li className="containerInputButton">
                <span className='input_tasks'>
                  {v.nombre}              
                </span>
                <button className="btn_edit">
                  Editar
                </button>
                <button className="btn_delete">
                  Eliminar
                </button>
              </li>
          )) 
          }     
        </ul> 
      </div>

    );
}

export default Alltasks;