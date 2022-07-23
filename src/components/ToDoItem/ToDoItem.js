import React from "react";
import classes from "./ToDoItem.module.scss";
import { Checkbox, Button } from "@nextui-org/react";

import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../store/features/todoSlice";

const ToDoItem = ({ heading, description, id }) => {
  const dispatch = useDispatch();

  const deleteOnClickhandler = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={classes.ToDoItem}>
      <div className={classes.Details}>
        <p>{heading}</p>
        <span>{description}</span>
      </div>
      <div className={classes.Controls}>
        <Checkbox aria-label="checkbox" />
        <Button
          color="error"
          auto
          flat
          aria-label="delete"
          onClick={deleteOnClickhandler}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ToDoItem;
