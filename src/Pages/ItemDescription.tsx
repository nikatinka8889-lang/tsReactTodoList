import React, { useEffect, useState } from 'react'
import { ToDo } from '../models/todo-item'
import { useNavigate, useParams } from 'react-router-dom';
interface ComponentProps {
    todos: ToDo[];
}
export default function ItemDescription({todos}: ComponentProps) {
    const {id} = useParams()
    const naviate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()
    useEffect(()=>{
        const SearchTodo = todos.find((todo)=> todo.id === Number(id) )
        if(SearchTodo) {
            setTodo(SearchTodo)

        } else {
            naviate('*')
        }
    }, [id, todos, naviate])
  return (
    <div className='container'>
        <h1>{todo?.text}</h1>
    </div>
  )
}
