import { useState, useRef } from "react";
import buttonStyles from "./Button.module.css";

export default function Form({ todoList, setTodoList }) {
  const [inputs, setInputs] = useState([]);
  const onChange = (e) => {
    setInputs(e.target.value);
  };

  const nextId = useRef(1);

  const onCreate = (e) => {
    const updatedList = [...todoList, inputs];
    setTodoList(updatedList);
    setInputs("");
    nextId.current += 1;
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      onCreate();
    }
  };

  return (
    <div>
      <input
        type={"text"}
        placeholder={"type here"}
        onChange={onChange}
        onKeyDown={onEnter}
        value={inputs}
      />
      <button onClick={onCreate} className={buttonStyles.SubmitButton}>+</button>
    </div>
  );
}