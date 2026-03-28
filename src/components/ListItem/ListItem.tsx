import React from "react";
import { ToDo } from "../../models/todo-item";
import { ListItemLink } from "./ListItem.styled";
export default function ListItem({ todo }: { todo: ToDo }) {
  return (
    <ListItemLink to={`/list/${todo.id}`} isDone={todo.isDone}>
      {todo.text}
    </ListItemLink>
  );
}