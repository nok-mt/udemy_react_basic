import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

export const EditModal = (props) => {
  const {
    setShowEditModal,
    value,
    setValue,
    todos,
    editIndex,
    setIncompleteTodos,
  } = props;

  const [errorText, setErrorText] = useState(false);

  const onChangeEditValue = (event) => setValue(event.target.value);

  const editIncompleteTodos = () => {
    if (value !== "") {
      const newIncompleteTodos = [...todos];
      newIncompleteTodos[editIndex] = value;
      setIncompleteTodos(newIncompleteTodos);
      setShowEditModal(false);
    } else {
      setErrorText(true);
    }
  };

  return (
    <Wrapper>
      <Box>
        {errorText && (
          <p
            style={{ color: "#fa6247", fontSize: "14px", textAlign: "center" }}
          >
            名前を入力してください
          </p>
        )}
        <ChangeName>
          <input type="text" value={value} onChange={onChangeEditValue} />
          <button onClick={editIncompleteTodos}>決定</button>
        </ChangeName>
        <button
          onClick={() => {
            setShowEditModal(false);
          }}
        >
          キャンセル
        </button>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-color: #ffffff;
`;

const ChangeName = styled.div`
  display: flex;
  gap: 10px;
`;
