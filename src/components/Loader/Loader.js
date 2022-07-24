import classes from "./Loader.module.scss";

import React from "react";
import { PropagateLoader } from "react-spinners";

import { useSelector } from "react-redux";

const Loader = () => {
  const loading = useSelector((state) => state.todo.loading);

  return (
    <div className={classes.Loader}>
      {loading ? <PropagateLoader size={8} color="#AE5CE4" /> : null}
    </div>
  );
};

export default Loader;
