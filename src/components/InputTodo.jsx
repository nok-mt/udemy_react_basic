import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <header className="input-area">
      <input placeholder="ToDoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </header>
  );
};
