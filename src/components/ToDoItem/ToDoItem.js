import React, { useState } from "react";
import classes from "./ToDoItem.module.scss";
import { Checkbox, Button } from "@nextui-org/react";
import { RiDeleteBack2Fill } from "react-icons/ri";

import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../store/features/todoSlice";

const ToDoItem = ({ heading, description, id, status }) => {
  const [isDone, setIsDone] = useState(status);
  const dispatch = useDispatch();

  const deleteOnClickhandler = () => {
    dispatch(deleteTodo(id));
  };

  const checkboxOnChangeHandler = () => {
    checkBoxHandler();
    dispatch(updateTodo(id));
  };

  const checkBoxHandler = () => {
    setIsDone(!isDone);
  };

  return (
    <div className={classes.ToDoItem}>
      <div className={classes.Details}>
        <div className={classes.CheckboxContainer}>
          <Checkbox
            aria-label="checkbox"
            onChange={checkboxOnChangeHandler}
            isSelected={isDone}
            color="primary"
          />
        </div>
        <div className={classes.Heading}>
          <p>{heading}</p>
          <span>{description}</span>
        </div>
      </div>
      <div className={classes.Controls}>
        <div className={classes.DeleteButtonContainer}>
          <button aria-label="delete" onClick={deleteOnClickhandler}>
            <RiDeleteBack2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
