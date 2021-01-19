import "./App.css";
import { useState, useEffect } from "react";
import useStickyData from './useStickyData'



function App() {
  const [inputValue, setInpuValue] = useState("");
  const [todoTasks, setTodoTasks] = useStickyData([]);
  const [doneTasks, setDoneTasks] = useState([]);
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
      }
      return todo;
    }))
  };

  console.log(todoTasks);

  return (
    <div className="app">
      <h1>Lista zadań</h1>
      <div className="listsWrapper">
        <div className="col-left">
          <h3>Do zrobienia ({todoTasks.length})</h3>
          <ul>
            {todoTasks.map((task) => (
              <li key={task.id}>
                <label>
                  <input type="checkbox" onChange={handleCheck} id={task.id} />
                  {task.text.toUpperCase()}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-right">
          <h3>Zrobione ({doneTasks.length})</h3>
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
  );
}

export default App;
