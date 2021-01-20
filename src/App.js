import "./App.css";
import { useState, useEffect} from "react";
import Task from './components/Task';


function App() {
  const [inputValue, setInpuValue] = useState("");
  const [todoTasks, setTodoTasks] = useState(() => { 
    const localData = localStorage.getItem('todoTasks');
    return localData ? JSON.parse(localData) : [];
  });
  const [doneTasks, setDoneTasks] = useState(() => { 
    const localData = localStorage.getItem('doneTasks');
    return localData ? JSON.parse(localData) : [];
  });
  const [isDone, setIsDone] = useState(false);
  let randomId = Math.random() * 1000;

  //handle input text
  //assign text to variable
  const handleInput = (e) => {
    setInpuValue(e.target.value);
    console.log(e.target.value);
  };

  //handle submit button
  //on submit setup task to false and move to todoTasks array
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoTasks([
      ...todoTasks,
      { text: inputValue, isDone: isDone, id: randomId },
    ]);
    setInpuValue("");
  };

  //handle checkbox
  //when checked change to true and move to doneTasks array
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

  //handle taks from todoTasks array
  //when isDone == true remove task from array
  const handleDelete = () => {
    todoTasks.map(todo => {
      if(todo.isDone){
        setTodoTasks(todoTasks.filter(el => el.id != todo.id));
      } 
    })
  }
  handleDelete();

  //set todoTasks into local storage
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks))
  }, [todoTasks]);

   //set doneTasks into local storage
  useEffect(() => {
    localStorage.setItem('doneTasks', JSON.stringify(doneTasks))
  }, [doneTasks]);

  return (
    <>
    <div className="app">
      <h1>Tasks list</h1>
      <div className="listsWrapper">
        <div className="col-left">
          <h3>Todo tasks ({todoTasks.length})</h3>
          <ul>
            {todoTasks.map((task) => (
              <Task task={task} handleCheck={handleCheck} isDone={task.isDone}/>
            ))}
          </ul>
        </div>
        <div className="col-right">
          <h3>Done tasks ({doneTasks.length})</h3>
          <ul>
            {doneTasks.map((task) => (
              <Task task={task} handleCheck={handleCheck} isDone={task.isDone}/>
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
            Add Task
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
