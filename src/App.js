import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const addTodoHandler = (e) => {
    e.preventDefault()
    db.collection('todos').add({
      todo: input
    })
    // setTodos([...todos, input])
    setInput('')
  }

  const fetchTodos = async () => {
    const response = db.collection('todos')
    const data = await response.get() // data wil be a promise, so await is needed
    setTodos(data.docs.map(item => item.data().todo))
    setIsLoading(false)
    }
    // console.log(todos)

  useEffect(() => {
    setIsLoading(true)
    fetchTodos()
  }, [])
  

  return (
    <div className="app">
      <h1>Todo App</h1>
      <form onSubmit={addTodoHandler}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button disabled={input.trim() === ''}>Add Todo</button>
      </form>

      {!isLoading ? <ul>
        {todos.map((todo, i) => (
          <Todo key={i} text={todo} />
        ))}
      </ul> : <p>Loading...</p>}
    </div>
  );
} 

export default App;
