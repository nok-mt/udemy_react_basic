import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickCompleteTodo, onClickDeleteTodo } = props;

  return (
    <div className="incomplete-area">
      {todos.length >= 5 && (
        <p className="alert-text">登録できるToDoは5個までです。</p>
      )}
      <p>未完了のToDO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <button onClick={() => onClickCompleteTodo(index)}>□</button>
              <p>{todo}</p>
              <button onClick={() => onClickDeleteTodo(index, todos)}>─</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
