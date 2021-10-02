import { useState, useRef } from "react";
import buttonStyles from "./Button.module.css";
import styled from "styled-components";
import { useToast } from "@chakra-ui/react";

export default function Form({ todoList, setTodoList }) {
  const [inputs, setInputs] = useState([]);
  const onChange = (e) => {
    setInputs(e.target.value);
  };

  const nextId = useRef(1);

  const toastRef = useRef();
  const toast = useToast();
  const closeToast = () => {
    toast.close(toastRef.current);
  };

  const addToast = () => {
    if (toastRef.current) {
      closeToast();
    }
    toastRef.current = toast({
      title: "Allons-y!",
      status: "success",
      isClosable: true
    });
  };

  const onCreate = (e) => {
    const updatedList = [...todoList, inputs];
    setTodoList(updatedList);
    setInputs("");
    nextId.current += 1;
    addToast();
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      onCreate();
    }
  };


  return (
    <AlignedDiv>
      <StyledInput
        type={"text"}
        placeholder={"type here"}
        onChange={onChange}
        onKeyDown={onEnter}
        value={inputs}
      /><button onClick={onCreate} className={buttonStyles.SubmitButton}>+</button>
    </AlignedDiv>
  );
}

const StyledInput = styled.input`
  color: #214842;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding-left: 6rem;
`;

const AlignedDiv = styled.div`
  display: flex;
  flex-direction: row;
`;