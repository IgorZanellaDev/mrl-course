import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "ui";
import Example from "ui/example";
import Layout from "components/Layout";
import TodosDetails from "ui/todos/details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todos from "ui/todos";
import Counter from "ui/counter";
import { RecoilRoot } from "recoil";
import "i18n";
import I18nTest from "ui/i18n-test";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/example",
    element: <Example />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/todos/:id",
    element: <TodosDetails />,
  },
  {
    path: "/i18n-test",
    element: <I18nTest />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/example-with-layout", element: <Example /> }],
  },
]);

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
