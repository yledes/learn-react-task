import './App.css';
import Alltasks from './components/AllTasks';
import ModifyTasks from './components/ModifyTasks';

import { useState } from 'react';
import { isEmpty } from 'lodash'; 
import shortid from 'shortid';

function App() {

  //creamos const task de useState vacio, para usarlo en el campo ingresar tareas.
  const [task, setTask] = useState("");

  const [tasks,setTasks] = useState([]);
    
  const addTaskScreen = (e) =>{    
    e.preventDefault(); 
    
    if(isEmpty(task)){
      console.log(" Ingrese una tarea");
      return;
    }

    const newTask = {
      id: shortid.generate(),
      nombre: task
    }  
    console.log(" tarea guardada");
    setTasks([...tasks, newTask]); 
    setTask("");
  }

  const deleteTasksAdd = (id) => {
    
    const filtreTask = tasks.filter(tasks => !(tasks.id ==id));
    /* console.log({filtreTask}); */
    setTasks(filtreTask);

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
        /> 
        <ModifyTasks         
          className='modify_data'
          task = {task}
          setTask = {setTask}
          addTaskScreen={addTaskScreen} 
          textName={true}         
          textButton={true}
        />
                
      </div>      
    </div>
  );
}

export default App;
