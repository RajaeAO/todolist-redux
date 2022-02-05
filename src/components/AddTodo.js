import { set } from "immer/dist/internal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length === 0) {
      alert("Enter atask before adding !!");
      setValue("");
      return;
    }
    dispatch(
      addTask({
        task: value,
      })
    );
    setValue("");
  };
  return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </div>
  );
};
