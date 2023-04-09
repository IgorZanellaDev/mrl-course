import { FunctionComponent } from "react";
import { ActionFunction, Form, generatePath, Link, LoaderFunction, useLoaderData } from "react-router-dom";
import { Todo } from "types/todo";

const Todos: FunctionComponent = () => {
  const todos: any = useLoaderData();

  return (
    <div>
      <h1>Todos list</h1>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <Link to={generatePath("/todos/:id", { id: todo.id.toString() })}>{todo.title}</Link>
            <Form method={"delete"} action={`/todos/${todo.id}/delete`}>
              <input type={"submit"} value={"X"} />
            </Form>
          </li>
        ))}
      </ul>
      <Form method={"post"} action={"/todos"}>
        <input type={"text"} name={"title"} />
        <input type={"submit"} />
      </Form>
    </div>
  );
};

export const todosLoader: LoaderFunction = async () => {
  return fetch(`${import.meta.env.VITE_API_URL}/todos`);
};

export const todosAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  return fetch(`${import.meta.env.VITE_API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { "Content-type": "application/json" },
  });
};

export const todosDeleteAction: ActionFunction = async ({ params }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/todos/${params.id}`, { method: "DELETE" });
};

export default Todos;
