import React from 'react'
import TodoListItem from './TodoListItem';

export default function TodoList( {todos, editTodos, deleteTodos}) {
  return (
    <ul>
        {todos.map( todo => {
            return (
              <TodoListItem todo={todo} editTodos={editTodos} deleteTodos={deleteTodos} key={todo.id}/>
            )
          })
        }
    </ul>
  )
}
