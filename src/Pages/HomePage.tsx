import React from 'react'
import { ToDo } from '../models/todo-item'
import ListItem from '../components/ListItem/ListItem'
interface ComponentProps {
    todos: ToDo[];
}
export default function HomePage({todos}: ComponentProps) {
  return (
    <div className='container'>
      {todos.map((todo:ToDo)=>(
        <ListItem todo={todo} key={todo.id}/>
      ))}
    </div>
  )
}
