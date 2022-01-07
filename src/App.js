import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/addTask/AddTask'
import TaskList from './components/taskList/TaskList';

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
     <AddTask/>
     <TaskList/>
  
    </div>
  );
}

export default App;
