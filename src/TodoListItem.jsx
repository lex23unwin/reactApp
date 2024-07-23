import React from 'react'

export default function TodoListItem( {todo, editTodos, deleteTodos}) {
  return (
    <li key={todo.id}>
        <input type="checkbox" checked={todo.completed} onChange={ (e) => {editTodos(todo, e.target.checked)} }/>
        <span>{todo.title}</span>
        <button onClick={ () => {deleteTodos(todo)}}>Delete</button>
    </li>
  )
}
