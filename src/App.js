import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ToDoArea from "./components/ToDoArea/ToDoArea";
import Loader from "./components/Loader/Loader";

import { useDispatch } from "react-redux";
import { fetchAllTodos } from "./store/features/todoSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return (
    <main>
      <Navbar />
      <Loader />
      <ToDoArea />
    </main>
  );
};

export default App;
