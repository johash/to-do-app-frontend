import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: null,
  loading: false,
  statusUpdating: false,
  isDeleting: false,
};

export const fetchAllTodos = createAsyncThunk("todo/fetchAllTodos", () => {
  return axios
    .get("https://to-do-app-api.vercel.app/api/todos")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const addTodo = createAsyncThunk("todo/addTodo", (todo) => {
  return axios
    .post("https://to-do-app-api.vercel.app/api/todos", todo)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", (id) => {
  return axios
    .delete("https://to-do-app-api.vercel.app/api/todos/" + id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

export const updateTodo = createAsyncThunk("todo/updateTodo", (id) => {
  return axios
    .put("https://to-do-app-api.vercel.app/api/todos/" + id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTodos.fulfilled, (state, { meta, payload }) => {
      if (payload.todos) {
        state.todos = payload.todos;
      } else {
        state.todos = [];
      }
    });
    builder.addCase(addTodo.pending, (state, { meta, payload }) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, { meta, payload }) => {
      state.loading = false;
    });
    builder.addCase(deleteTodo.pending, (state, { meta, payload }) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, { meta, payload }) => {
      state.loading = false;
    });
    builder.addCase(updateTodo.pending, (state, { meta, payload }) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, { meta, payload }) => {
      state.loading = false;
    });
  },
});

export const { setTodos } = todoSlice.actions;

export default todoSlice.reducer;
