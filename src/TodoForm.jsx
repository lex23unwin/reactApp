import React from 'react'
import { useState } from 'react'

export default function TodoForm( {setTodos}) {

    const [newItem, setNewItem] = useState('');

    function addTodos(newItem, e) {
        e.preventDefault();
        setTodos( (prevTodos) => {
          return [...prevTodos, { id: Math.random(), title: newItem, completed: false } ]
        })
        setNewItem('');
      };

  return (
    <form onSubmit={ (e) => {addTodos(newItem, e)}}>
        <label htmlFor="name">New Item</label>
        <input id="name" type="text" value = {newItem} onChange={ (e) => setNewItem(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
  )
}
