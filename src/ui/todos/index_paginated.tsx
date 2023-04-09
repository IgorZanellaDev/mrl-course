import { FunctionComponent } from "react";
import useTodosApi from "network/useTodosApi";
import { generatePath, Link, useSearchParams } from "react-router-dom";

const TodosPaginated: FunctionComponent = () => {
  const [queryParams, setQueryParams] = useSearchParams();

  const page = Number(queryParams.get("page")) || 1;

  const { data: todos, isLoading: isTodosLoading } = useTodosApi.getAllPaginated(page);

  const pagesArray = todos?.pagination.last?._page
    ? Array.from({ length: todos.pagination.last._page }, (_, i) => i + 1)
    : undefined;

  return (
    <div>
      <h1>Todos list (page {page})</h1>
      {isTodosLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {todos?.data.map((todo) => (
            <li key={todo.id}>
              <Link to={generatePath("/todos/:id", { id: todo.id.toString() })}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
        {pagesArray?.map((page) => (
          <button onClick={() => setQueryParams([["page", page.toString()]])}>{page}</button>
        ))}
      </div>
    </div>
  );
};

export default TodosPaginated;
