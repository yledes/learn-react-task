import './App.css';
import Alltasks from './controller/AllTasks';
import ModifyTasks from './controller/ModifyTasks';

function App() {
  return (
    <div className='container'>
      <h1>
        Control de tareas
      </h1>
      
      <div className='container_data'>
        <Alltasks>

        </Alltasks> 
        
        <ModifyTasks className='modify_data'>

        </ModifyTasks>
      </div>      
    </div>
  );
}

export default App;
