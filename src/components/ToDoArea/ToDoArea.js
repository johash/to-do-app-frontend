import React, { useEffect, useState } from "react";
import classes from "./ToDoArea.module.scss";

import ToDoItem from "../ToDoItem/ToDoItem";
import { Button } from "@nextui-org/react";
import axios from "axios";

const ToDoArea = () => {
  const [todos, setTodos] = useState();
  useEffect(() => {
    axios
      .get("https://to-do-app-api.vercel.app/api/todos")
      .then((res) => {
        setTodos(res.data.todos);
        console.log(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={classes.ToDoArea}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <p>To-Do List</p>
          <Button flat auto aria-label="Add">
            Add
          </Button>
        </div>
        <hr />
        <div className={classes.ToDoContainer}>
          {todos
            ? todos.map((todo) => {
                return (
                  <ToDoItem
                    key={todo._id}
                    heading={todo.heading}
                    description={todo.description}
                  />
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
};

export default ToDoArea;
