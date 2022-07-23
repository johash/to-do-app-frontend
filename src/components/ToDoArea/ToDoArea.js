import React, { useState } from "react";
import classes from "./ToDoArea.module.scss";

import ToDoItem from "../ToDoItem/ToDoItem";
import AddToDoForm from "../AddTodoForm/AddTodoForm";
import { Button } from "@nextui-org/react";
import { Loading } from "@nextui-org/react";

import { useSelector } from "react-redux";

const ToDoArea = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTodoForm = () => {
    setIsModalOpen(true);
  };

  const closeTodoForm = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={classes.ToDoArea}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <p>To-Do List</p>
          <Button flat auto aria-label="Add" onClick={openTodoForm}>
            Add
          </Button>
        </div>
        <hr />
        <div className={classes.ToDoContainer}>
          {todos ? (
            todos.map((todo) => {
              return (
                <ToDoItem
                  key={todo._id}
                  id={todo._id}
                  heading={todo.heading}
                  description={todo.description}
                />
              );
            })
          ) : (
            <div className={classes.LoaderContainer}>
              <Loading />
            </div>
          )}
        </div>
      </div>
      <AddToDoForm open={isModalOpen} onClose={closeTodoForm} />
    </section>
  );
};

export default ToDoArea;
