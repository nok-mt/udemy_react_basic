import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBackTodo } = props;
  return (
    <div className="complete-area">
      <p>完了したToDO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <button onClick={() => onClickBackTodo(index)}>✓</button>
              <p>{todo}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
