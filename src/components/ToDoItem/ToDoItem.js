import React from "react";
import classes from "./ToDoItem.module.scss";
import { Checkbox, Button } from "@nextui-org/react";

const ToDoItem = ({ heading, description }) => {
  return (
    <div className={classes.ToDoItem}>
      <div className={classes.Details}>
        <p>{heading}</p>
        <span>{description}</span>
      </div>
      <div className={classes.Controls}>
        <Checkbox aria-label="checkbox" />
        <Button color="error" auto flat aria-label="delete">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ToDoItem;
