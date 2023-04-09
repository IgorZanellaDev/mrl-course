import { FunctionComponent, useState } from "react";
import useTodosApi, { TODOS_KEY } from "network/useTodosApi";
import { generatePath, Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import client from "network/utils/client";

const Todos: FunctionComponent = () => {
  const queryClient = useQueryClient();

  const [newTodoTitle, setNewTodoTitle] = useState<string>("");

  const { data: todos, isLoading: isTodosLoading } = useTodosApi.getAll();
  const { mutate: postTodo } = useTodosApi.post();
  const { mutate: deleteTodo } = useTodosApi.delete();

  return (
    <div>
      <h1>Todos list</h1>
      {isTodosLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              <Link
                onMouseOver={() =>
                  queryClient.prefetchQuery({
                    queryKey: [TODOS_KEY, todo.id],
                    queryFn: () => client.get({ path: `/todos/${todo.id}` }),
                  })
                }
                to={generatePath("/todos/:id", { id: todo.id.toString() })}
              >
                {todo.title}
              </Link>
              <button onClick={() => deleteTodo({ id: todo.id })}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <input value={newTodoTitle} onChange={(event) => setNewTodoTitle(event.target.value)} />
      <button onClick={() => postTodo({ title: newTodoTitle })}>Create new</button>
    </div>
  );
};

export default Todos;
