import Form from "../components/Form/Form";
import ToDoList from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../features/todoList";
export default function TodoListPage() {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const createNewToDo = (text: string) => {
    dispatch(createAction(text));
    toast.success("Задача добавлена ✅");
  };

  const upDateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem));
    toast.info("Статус задачи изменён 🔄");
  };

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem));
    toast.error("Задача удалена ❌");
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList
        todos={todoList}
        upDateToDo={upDateToDo}
        deleteToDo={deleteToDo}
      />
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
  );
}
