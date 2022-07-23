import classes from "./AddTodoForm.module.scss";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Input, Button } from "@nextui-org/react";
import { addTodo, fetchAllTodos } from "../../store/features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const AddTodoForm = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.todo.loading);
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();

  const formOnSubmitHandler = (data) => {
    dispatch(addTodo(data));
  };

  useEffect(() => {
    if (!loading) {
      dispatch(fetchAllTodos());
      onClose();
    }
  }, [loading]);

  return (
    <Modal closeButton blur open={open} onClose={onClose}>
      <Modal.Header>
        <b className={classes.Title}>Add To-Do</b>
      </Modal.Header>
      <Modal.Body>
        <div className={classes.FormContainer}>
          <form
            className={classes.Form}
            onSubmit={handleSubmit(formOnSubmitHandler)}
          >
            <Input
              placeholder="Task Name"
              aria-label="task name"
              width="100%"
              size="lg"
              {...register("heading")}
            />
            <Input
              placeholder="Description"
              aria-label="description"
              width="100%"
              size="lg"
              {...register("description")}
            />
            <Button width="100%" type="submit">
              Add Task
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddTodoForm;
