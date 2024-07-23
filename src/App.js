import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

export default function App() 
{

  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodos(newItem, e) {
    e.preventDefault();
    setTodos( (prevTodos) => {
      return [...prevTodos, { id: Math.random(), title: newItem, completed: false } ]
    })
    setNewItem('');
  };

  function editTodos(todo, completed) {
    setTodos( (prevTodos) => {
      return prevTodos.map( (eachTodo) => {
        if (eachTodo.id === todo.id)
        {
          return {...eachTodo, completed: completed}
        }
        return eachTodo
      })
    })
  }

  function deleteTodos(todo) {
    setTodos( (prevTodos) => {
      return prevTodos.filter( eachTodo => eachTodo.id !== todo.id)
    })
  }

  return (
    <>
      <form onSubmit={ (e) => {addTodos(newItem, e)}}>
        <label htmlFor="name">New Item</label>
        <input id="name" type="text" value = {newItem} onChange={ (e) => setNewItem(e.target.value)}/>
        <button type="submit">Add</button>
      </form>

      <h1>Todo List</h1>

      <ul>
        {todos.map( todo => {
            return (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.completed} onChange={ (e) => {editTodos(todo, e.target.checked)} }/>
                <span>{todo.title}</span>
                <button onClick={ () => {deleteTodos(todo)}}>Delete</button>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}