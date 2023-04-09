import { FunctionComponent } from "react";
import { generatePath, Link } from "react-router-dom";
import useTodosApi from "network/useTodosApi";
import { Todo } from "types/todo";

const TodosInfinite: FunctionComponent = () => {
  const {
    data: todos,
    isLoading: isTodosLoading,
    fetchNextPage: fetchNextTodosPage,
    hasNextPage: hasNextTodosPage,
    isFetchingNextPage: isFetchingNextTodosPage,
  } = useTodosApi.getAllInfinite();

  const todosArray = (todos?.pages && ([] as Todo[]).concat(...todos.pages)) || [];

  console.log(todosArray);

  return (
    <div>
      <h1>Todos list</h1>
      {isTodosLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {todosArray?.map((todo) => (
            <li key={todo.id}>
              <Link to={generatePath("/todos/:id", { id: todo.id.toString() })}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {hasNextTodosPage && (
        <button disabled={isTodosLoading || isFetchingNextTodosPage} onClick={() => fetchNextTodosPage()}>
          Load more
        </button>
      )}
    </div>
  );
};

export default TodosInfinite;
