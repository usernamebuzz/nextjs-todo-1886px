import { useState } from "react";
import ListStyles from "./Todo.module.css";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  const TodoList = () => {
    return todoList.map((task, index) => (
      <Item task={task} todoList={todoList} setTodoList={setTodoList} />
    ));
  };

  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList className={ListStyles.ToDoListStyle} />
    </div>
  );
}
