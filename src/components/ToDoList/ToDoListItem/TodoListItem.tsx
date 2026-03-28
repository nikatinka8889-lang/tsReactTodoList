import { ToDo } from '../../../models/todo-item';
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from './ToDoListItem.styled';

import chekIcon from '../../../assets/images/check.png'
import unChekIcon from '../../../assets/images/uncheck.png'
import trash from '../../../assets/images/trash.png'

export default function TodoListItem(props:{toDoItem: ToDo, upDateToDo: (todos: ToDo) => void,  deleteToDo: (todos: ToDo) => void}) {
  return (
    <ToDoItem>
      <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
      <ToDoItemControls>
        <ToDoItemControl icon={trash} onClick={()=> props.deleteToDo(props.toDoItem)} ></ToDoItemControl>
        <ToDoItemControl icon={props.toDoItem.isDone ? chekIcon : unChekIcon} onClick={()=> props.upDateToDo(props.toDoItem)} ></ToDoItemControl>
      </ToDoItemControls>
    </ToDoItem>
  );
}
