import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBackTodo } = props;
  return (
    <div className="complete-area">
      <p>完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <input
                type="checkbox"
                onClick={() => onClickBackTodo(index)}
                checked
              />
              <p>{todo}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
