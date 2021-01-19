import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [inputValue, setInpuValue] = useState('');
  const [todoTasks, setTodoTasks] = useState([]);
  const [isDone, setIsDone] = useState(false);
  let randomId = Math.random() * 1000; 

  
  


  const handleInput = (e) => {
    setInpuValue(e.target.value);
    console.log(e.target.value);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoTasks([...todoTasks, {text: inputValue, isDone: isDone, id: randomId}]);
    setInpuValue('')
  }

  return (
    <div className="app">
      <h1>Lista zadań</h1>
      <div className="listsWrapper">
        <div className="col-right">
          <ul>
            {
              todoTasks.map(task => (
              <li key={task.id}>
                <label>
                    <input type="checkbox" value={task.text}  />
                    {task.text.toUpperCase()}
                </label>
              </li>
              ))
            }
          </ul>
        </div>
        <div className="col-left">

        </div>
      </div>
      <div className="inputWrapper">
        <form>
            <input value={inputValue} onChange={handleInput} type="text" className="input"/>
            <button onClick={handleSubmit} type="submit" className="button">
                Dodaj zadanie
            </button>
        </form>
        </div>
    </div>
  );
}

export default App;
