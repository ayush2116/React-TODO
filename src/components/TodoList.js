import React from 'react'
import Todo from './Todo'
const TodoList = ({todos,settodos, filteredTodos}) => {
  return (
    <div className='todo-container'>
        <ul className="todo-list">
            {filteredTodos.map((todo)=> (
                <Todo 
                settodos={settodos} todos={todos} todo={todo}
                 key={todo.id} text={todo.text}/> // mapping the the list of todos in TODO component
            ) )}
        </ul>
    </div>
  )
}

export default TodoList  