import { FunctionComponent } from "react";
import { LoaderFunction, useLoaderData, useParams } from "react-router-dom";
import Test from "components/Test";
import useQueryParams from "hooks/useQueryParams";

const TodosDetails: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();

  const queryParams = useQueryParams();

  console.log(queryParams.text);

  const todo: any = useLoaderData();

  return (
    <div>
      <h1>Todo param id: {id}</h1>
      <h1>Todo: {todo.id}</h1>
      <p>Title: {todo.title}</p>
      <Test />
    </div>
  );
};

export const todosDetailsLoader: LoaderFunction = async ({ params }) => {
  return fetch(`${import.meta.env.VITE_API_URL}/todos/${params.id}`);
};

export default TodosDetails;
