import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import useTodosApi from "network/useTodosApi";

const TodosDetails: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const { data: todo, isLoading: isTodoLoading } = useTodosApi.get(Number(id));

  return (
    <div>
      {isTodoLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Todo: {todo?.id}</h1>
          <p>Title: {todo?.title}</p>
        </>
      )}
    </div>
  );
};

export default TodosDetails;
