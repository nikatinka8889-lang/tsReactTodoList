import TodoListItem from "./ToDoListItem/TodoListItem";
import './ToDoList.scss'
export default function ToDoList() {
  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        <TodoListItem />
      </ul>
      <ul className="todo-list completed">
        <TodoListItem/>
        {/* <li className="todo-list-item__wrapper">
          <span>Вторая задача</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-uncheck"></button>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
