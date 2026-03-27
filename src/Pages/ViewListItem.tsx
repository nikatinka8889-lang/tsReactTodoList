import React, { useEffect, useState } from 'react'
import { ToDo } from '../models/todo-item'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function ViewListItem() {
      const todoList = useSelector((state: RootState) => state.todoList.todos);

    const {id} = useParams()
    const naviate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()
    useEffect(()=>{
        const SearchTodo = todoList.find((todo)=> todo.id === Number(id) )
        if(SearchTodo) {
            setTodo(SearchTodo)

        } else {
            naviate('*')
        }
    }, [id, todoList, naviate])
  return (
    <div className='container'>
        <h1>{todo?.text}</h1>
    </div>
  )
}
