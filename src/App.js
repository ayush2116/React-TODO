import {useState , useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

 
  const [inputText, setinputText] = useState("");
  const [todos, settodos] = useState([]);
  const [status, setstatus] = useState("all")
  const [filteredTodos, setfilteredTodos] = useState([])
  useEffect(() => {
    
    filterHandler();
  },[todos,status]);

    // const saveLocalTodos = () => {
    //   if(localStorage.getItems('todo'))
    // }
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setfilteredTodos(todos.filter((todo) => todo.completed === true))
          break;
          case 'incompleted':
            setfilteredTodos(todos.filter((todo) => todo.completed === false))
            break;
            default:
              setfilteredTodos(todos)
              break;
      }
    }
  return (
    <div className="App">
    <header>
      <h1><b>To-do List</b></h1>
      </header>
      <Form inputText={inputText} todos={todos}  settodos={settodos} setinputText={setinputText} setstatus={setstatus}/>
      <TodoList settodos={settodos} filteredTodos={filteredTodos} todos={todos}/>
    </div>
  );
}

export default App;
