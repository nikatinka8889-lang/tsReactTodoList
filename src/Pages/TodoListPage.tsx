import { useState } from "react";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import ToDoList from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
export default function TodoListPage() {
  const [todos, setTodos] = useState<ToDo[]>([])


    const createNewToDo = (text: string) =>{
      const newToDo:ToDo = {
        id: todos.length,
        text: text,
        isDone: false,
      }

      setTodos(prev=> [...prev, newToDo])
        toast.success("Задача добавлена ✅")
    }


    const upDateToDo = (toDoItem: ToDo)=>{
      const newTodos = todos.map((todo)=>{
        if(todo.id === toDoItem.id) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
      setTodos(newTodos)
         toast.info("Статус задачи изменён 🔄")

    }

    const deleteToDo = (toDoItem: ToDo)=>{
      const newTodos = todos.filter(todo=> todo.id !== toDoItem.id)
      setTodos(newTodos)
        toast.error("Задача удалена ❌")
    }
    
  return (
    <>
    <Header/>
    <Form createNewToDo={createNewToDo}/>
    <ToDoList todos={todos}  upDateToDo={upDateToDo} deleteToDo={deleteToDo}/>
    <ToastContainer
  position="bottom-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnHover
  draggable
/>
    </>
  )
}
