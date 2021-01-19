import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [inputValue, setInpuValue] = useState('');
  const [tasks, setTasks] = useState([]);
  let randomId = Math.random() * 1000; 
  console.log(tasks);
  
  


  const handleInput = (e) => {
    setInpuValue(e.target.value);
    console.log(e.target.value);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, {text: inputValue, isDone: false, id: randomId}]);
    setInpuValue('')
  }

  return (
    <div className="App">
      <h1>Lista zadań</h1>
      <div className="listsWrapper">
        <div className="col-right">
          
        </div>
        <div className="col-left">

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

    </div>
  );
}

export default App;
