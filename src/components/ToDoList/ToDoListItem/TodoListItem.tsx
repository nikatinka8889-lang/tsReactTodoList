import { ToDo } from '../../../models/todo-item';
import './TodoListItem.scss'

export default function TodoListItem(props:{toDoItem: ToDo, upDateToDo: (todos: ToDo) => void,  deleteToDo: (todos: ToDo) => void}) {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button onClick={()=> props.deleteToDo(props.toDoItem)} className="btn-trash"></button>
        <button onClick={()=> props.upDateToDo(props.toDoItem)} className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}></button>
      </div>
    </li>
  );
}
