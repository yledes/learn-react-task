import './App.css';
import Alltasks from './components/AllTasks';
import ModifyTasks from './components/ModifyTasks';

import { useState } from 'react';
import { isEmpty } from 'lodash'; 
import shortid from 'shortid';

function App() {

  //creamos const task de useState vacio, para usarlo en el campo ingresar tareas.
  const [task, setTask] = useState("");
  // estado donde se van a guardar todas las tareas en un array
  const [tasks,setTasks] = useState([]);
  // estado donde se va editar una tarea en particular empezando en false
  const [editTask, setEditTask] = useState(false);
  // estado donde se va guardar el id de la tarea que se va ediar
  const [idTask, setIdTask] = useState("");
  // estado donde guardaremos un mensaje, si el input esta vacio al guardar o agregar
  const [textEdit, setTextEdit] = useState("");

  /* funcion que permite guardar las tareas,
   ingresadas al hacer clic en button Agregar
  */
  const addTaskScreen = (e) =>{    
    e.preventDefault(); 
    
    if(isEmpty(task)){
      setTextEdit(" Ingrese una tarea");  
      return;
    }
    const newTask = {
      id: shortid.generate(),
      name: task
    }

    setTasks([...tasks, newTask]); 
    setTask("");
    setTextEdit("");
  }

  /* funcion que permite editar la tarea, 
  ingresando los cambios en la tarea 
  */
  const EditTaskNew = (e) =>{
    e.preventDefault(); 
    
    if(isEmpty(task)){
      setTextEdit(" Ingrese una tarea");      
      return;
    }
    const arrTask = tasks.map( tas => tas.id === idTask ? {idTask, name: task} : tas );
    
    setTasks(arrTask);
    setTask("");
    setIdTask("");
    setEditTask(false);
    setTextEdit("");
  }

  /* funcion que permite eliminar
  una tarea, comparando por el id,
  y devolviendo la nueva lista de tareas
  */
  const deleteTasksAdd = (id) => {    
    const filtreTask = tasks.filter(tasks => !(tasks.id ==id));    
    setTasks(filtreTask);
  }

  /* funcion  para editar, 
  donde se obtiene la tarea y el id
  que el usuario desea editar
  los cuales se guardan en los estados y
  tambien se cambia el estado a modo de 
  edit es true
  */

  const editTasksAdd = (nwTask) => {
    setTask(nwTask.name);
    setEditTask(true);
    setIdTask(nwTask.id);    
  }

  return (
    <div className='container'>
      <h1>
        Control de tareas
      </h1>
      
      <div className='container_data'>
        
        <Alltasks 
          className = 'createTask'                 
          tasks = {tasks} 
          deleteTasksAdd = {deleteTasksAdd}
          editTasksAdd = {editTasksAdd}
        /> 
        <ModifyTasks         
          className='modify_data'
          task = {task}
          setTask = {setTask}
          addTaskScreen={addTaskScreen}   
          EditTaskNew = { EditTaskNew }      
          setEditTask = {editTask}
          textEdit = {textEdit}
        />
                
      </div>      
    </div>
  );
}

export default App;
