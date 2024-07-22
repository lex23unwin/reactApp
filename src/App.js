import './App.css';
import React from 'react';
import { useState } from 'react';

export default function App() {

  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos( (prevTodos) => {
      return [...prevTodos, {id: crypto.randomUUID(), title: newItem, completed: false}]
    })
  }

  console.log(todos)

  return (
      <>
        <form onSubmit={handleSubmit} className="new-item-form"> 
          <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem} type="text" id="item" onChange={e => setNewItem(e.target.value)}/>
          </div>
          <button className="btn">Add</button>
        </form>

        <h1 className="header">Todo List</h1>
        
        <ul className="list">
          {todos.map}
        </ul>
      </>
  );
}