import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "ui";
import Example from "ui/example";
import Todos from "ui/todos";
import TodosDetails from "ui/todos/details";
import Layout from "components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/example"} element={<Example />} />
      <Route path={"/todos"} element={<Todos />} />
      <Route path={"/todos/:id"} element={<TodosDetails />} />
      <Route element={<Layout />}>
        <Route path={"/example-with-layout"} element={<Example />} />
      </Route>
    </Routes>
  );
};

export default App;
