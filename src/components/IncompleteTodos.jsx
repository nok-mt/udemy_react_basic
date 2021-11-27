import React from "react";
import { EditModal } from "./EditModal";

export const IncompleteTodos = (props) => {
  const {
    todos,
    onClickCompleteTodo,
    onClickDeleteTodo,
    onClickEditTodo,
    showEditModal,
    editValue,
    setEditValue,
    setShowEditModal,
    editIndex,
    setIncompleteTodos,
  } = props;

  return (
    <div className="incomplete-area">
      {todos.length >= 5 && (
        <p className="alert-text">登録できるToDoは5個までです。</p>
      )}
      <p>やること</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <input
                type="checkbox"
                onClick={() => onClickCompleteTodo(index)}
              />
              <p>{todo}</p>
              <button onClick={() => onClickEditTodo(index)}>編集</button>
              <button onClick={() => onClickDeleteTodo(index, todos)}>
                削除
              </button>
            </li>
          );
        })}
      </ul>
      {showEditModal && (
        <EditModal
          setShowEditModal={setShowEditModal}
          value={editValue}
          setValue={setEditValue}
          todos={todos}
          editIndex={editIndex}
          setIncompleteTodos={setIncompleteTodos}
        />
      )}
    </div>
  );
};
