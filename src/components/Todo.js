import React from 'react'
import './Todo.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({text}) => {
  return (
    <li className='todo'>
      <h1>here is the todo list for u</h1>
        <p>{text}</p>
        <EditIcon />
        <DeleteIcon />
    </li>
  )
}

export default Todo