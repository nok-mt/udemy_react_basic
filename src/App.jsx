/* eslint react-hooks/exhaustive-deps: off */

import React from "react";
import { useState } from "react/cjs/react.development";
import "./styles/styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodotext] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const [showEditModal, setShowEditModal] = useState(false);

  const [editValue, setEditValue] = useState("");

  const [editIndex, setEditIndex] = useState(0);

  const onChangeTodoText = (event) => setTodotext(event.target.value);

  const onClickAddTodo = () => {
    if (todoText === "") return;
    const newIncompleteTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newIncompleteTodos);
    setTodotext("");
  };

  const onClickDeleteTodo = (index, targetArray) => {
    const newArray = [...targetArray];
    newArray.splice(index, 1);
    if (targetArray === incompleteTodos) {
      setIncompleteTodos(newArray);
    } else if (targetArray === completeTodos) {
      setCompleteTodos(newArray);
    }
  };

  const onClickCompleteTodo = (index) => {
    onClickDeleteTodo(index, incompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBackTodo = (index) => {
    onClickDeleteTodo(index, completeTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickEditTodo = (index) => {
    setShowEditModal(true);
    setEditValue(incompleteTodos[index]);
    setEditIndex(index);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAddTodo}
        disabled={incompleteTodos.length >= 5}
      />
      <main>
        <IncompleteTodos
          todos={incompleteTodos}
          onClickCompleteTodo={onClickCompleteTodo}
          onClickDeleteTodo={onClickDeleteTodo}
          onClickEditTodo={onClickEditTodo}
          editValue={editValue}
          setEditValue={setEditValue}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          todoText={todoText}
          setTodotext={setTodotext}
          editIndex={editIndex}
          setIncompleteTodos={setIncompleteTodos}
        />
        <CompleteTodos
          todos={completeTodos}
          onClickBackTodo={onClickBackTodo}
        />
      </main>
    </>
  );
};
