import "./App.css";
import { useState} from "react";
import useStickyData from './useStickyData';

import Task from './components/Task';



function App() {
  const [inputValue, setInpuValue] = useState("");
  const [todoTasks, setTodoTasks] = useStickyData([]);
  const [doneTasks, setDoneTasks] = useStickyData([]);
  const [isDone, setIsDone] = useState(false);
  let randomId = Math.random() * 1000;

  const handleInput = (e) => {
    setInpuValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoTasks([
      ...todoTasks,
      { text: inputValue, isDone: isDone, id: randomId },
    ]);
    setInpuValue("");
  };

  const handleCheck = e => {
    setIsDone(todoTasks.map(todo => {
      if(todo.id == e.target.id) {
        todo.isDone = !todo.isDone;
        if(todo.isDone){
          setDoneTasks([
            ...doneTasks, todo
          ]);
        }
      }
    }))
  };


  const handleDelete = () => {
    todoTasks.map(todo => {
      if(todo.isDone){
        setTodoTasks(todoTasks.filter(el => el.id != todo.id));
      } 
    })
  }

  handleDelete();

  console.log(todoTasks);

  return (
    <>
    <div className="app">
      <h1>Lista zadań</h1>
      <div className="listsWrapper">
        <div className="col-left">
          <h3>Do zrobienia ({todoTasks.length})</h3>
          <ul>
            {todoTasks.map((task) => (
              <Task task={task} handleCheck={handleCheck} isDone={isDone}/>
            ))}
          </ul>
        </div>
        <div className="col-right">
          <h3>Zrobione ({doneTasks.length})</h3>
          <ul>
            {doneTasks.map((task) => (
              <Task task={task} handleCheck={handleCheck} isDone={isDone}/>
            ))}
          </ul>
        </div>
      </div>
      <div className="inputWrapper">
        <form>
          <input
            value={inputValue}
            onChange={handleInput}
            type="text"
            className="input"
          />
          <button onClick={handleSubmit} type="submit" className="button">
            Dodaj zadanie
          </button>
        </form>
      </div>
    </div>
    <footer>
        <p>© 2021 Filip Wydra</p>
        <p><a href="https://github.com/villagef/tasks_app"><i className="fab fa-github"></i>Github source code</a></p>
    </footer>
    </>
  );
}

export default App;
