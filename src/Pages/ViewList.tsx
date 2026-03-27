import React from 'react'
import { ToDo } from '../models/todo-item'
import ListItem from '../components/ListItem/ListItem'
import { useSelector, } from 'react-redux';
import { RootState } from '../store';
export default function ViewList() {
    const todoList = useSelector((state: RootState) => state.todoList.todos);

  return (
    <div className='container'>
      {todoList.map((todo:ToDo)=>(
        <ListItem todo={todo} key={todo.id}/>
      ))}
    </div>
  )
}
