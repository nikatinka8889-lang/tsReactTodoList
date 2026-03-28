import TodoListItem from "./ToDoListItem/TodoListItem";
import { ToDo } from "../../models/todo-item";
import { TodoContainer, TodoList } from "./ToDoList.styled";

export default function ToDoList(props: {
  todos: ToDo[];
  upDateToDo: (todo: ToDo) => void;
  deleteToDo: (todo: ToDo) => void;
}) {
  
  const activeTodos = props.todos
    .filter((item) => !item.isDone)
    .map((item) => (
      <TodoListItem
        toDoItem={item}
        key={item.id}
        upDateToDo={props.upDateToDo}
        deleteToDo={props.deleteToDo}
      />
    ));

  const completedTodos = props.todos
    .filter((item) => item.isDone)
    .map((item) => (
      <TodoListItem
        toDoItem={item}
        key={item.id}
        upDateToDo={props.upDateToDo}
        deleteToDo={props.deleteToDo}
      />
    ));

  return (
    <TodoContainer>
      <TodoList variant="active">
        {activeTodos}
      </TodoList>

      <TodoList variant="completed">
        {completedTodos}
      </TodoList>
    </TodoContainer>
  );
}