import { useState } from "react";
import Link from "next/link";
import itemStyles from "./item.module.css";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ task, todoList, setTodoList }) {
  const [state, setState] = useState("undone");
  const changeState = () => {
    setState(state === "undone" ? "done" : "undone");
  };

  const removeItem = (e) => {
    setTodoList(todoList.filter((item) => item !== task));
  };

  return (
    <section className={itemStyles.section}>
      <ul>
        <li
          style={{ textDecoration: state === "done" ? "line-through" : "none" }}
          onClick={changeState}
        >
          {task}
        </li>
        <Link href="/posts/todo_details">
          <a>add details!</a>
        </Link>{" "}
        <button value={state} onClick={removeItem}>
          X
        </button>
      </ul>
    </section>
  );
}
