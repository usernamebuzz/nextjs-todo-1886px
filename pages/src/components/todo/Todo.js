import { useState } from "react";
import ListStyles from "./Todo.module.css";
import styled from "styled-components";

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
      <Styledh1>Things to Do</Styledh1>
      <TodoList className={ListStyles.ToDoListStyle}/>
    </div>
  );
}

const Styledh1 = styled.h1`
  color: #F5F3E8;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  margin: 2rem;
  padding: 2rem;
  background-color: #214842
`;