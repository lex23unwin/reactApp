import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App() 
{
  const [todos, setTodos] = useState([]);

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
      <TodoForm setTodos={setTodos} />

      <h1>Todo List</h1>

      <TodoList todos={todos} editTodos={editTodos} deleteTodos={deleteTodos}/>
    </>
  );
}