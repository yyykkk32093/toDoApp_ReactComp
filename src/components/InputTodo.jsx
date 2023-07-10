import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd, disabledFlg } = props;

  return (
    <>
      <div style={style}>
        <input
          disabled={disabledFlg}
          placeholder="ToDoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button disabled={disabledFlg} onClick={onClickAdd}>
          追加
        </button>
      </div>
    </>
  );
};
