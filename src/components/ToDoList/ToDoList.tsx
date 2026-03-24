import TodoListItem from "./ToDoListItem/TodoListItem";
import "./ToDoList.scss";
import { ToDo } from "../../models/todo-item";
export default function ToDoList(props:{todos: ToDo[], upDateToDo: (todos: ToDo) => void,  deleteToDo: (todos: ToDo) => void},   ) {
  


  const chekedList = ()=>{
    return props.todos.filter(item=> !item.isDone).map((item, index)=>{
          return(
            <TodoListItem toDoItem={item} key={index}   upDateToDo={props.upDateToDo} deleteToDo={props.deleteToDo}/>
          )
        })
  }


  const unChekedList = ()=>{
    return props.todos.filter(item=> item.isDone).map((item, index)=>{
          return(
            <TodoListItem toDoItem={item} key={index}   upDateToDo={props.upDateToDo} deleteToDo={props.deleteToDo}/>
          )
        })
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {chekedList()}
      </ul>
      <ul className="todo-list completed">
        {unChekedList()}
      </ul>
    </div>
  );
}
